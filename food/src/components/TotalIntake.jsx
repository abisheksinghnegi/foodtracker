import React, { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Total.css";
import l from '../images/l.png'

const BreakfastDashboard = () => {
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFats, setTotalFats] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBreakfastData();
    }, []);

    const fetchBreakfastData = async () => {
        setIsLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "foodLogs"));
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            let calories = 0,
                protein = 0,
                carbs = 0,
                fats = 0;

            data.forEach((item) => {
                calories += item.calories || 0;
                protein += item.protein || 0;
                carbs += item.carbs || 0;
                fats += item.fats || 0;
            });

            setTotalCalories(calories);
            setTotalProtein(protein);
            setTotalCarbs(carbs);
            setTotalFats(fats);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching breakfast data:", error);
            setIsLoading(false);
        }
    };

    const breakfastChartData = {
        labels: ["Calories", "Protein", "Carbs", "Fats"],
        datasets: [
            {
                label: "Breakfast Nutrition",
                data: [totalCalories, totalProtein, totalCarbs, totalFats],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <div id="intake">
        <div className="breakfast-dashboard-container">
            <div id="breakfast-summary-section">
                
                <br />
                {isLoading && <p>Loading breakfast data...</p>}
                {!isLoading && (
                    <>
                    <div id="dbba">
                        <div className="breakfast-chart-area">
                            <Bar data={breakfastChartData} options={chartOptions} />
                        </div>
                        <div className="breakfast-summary-card">
                        <h2>Total Intake</h2>
                        <br />
                            <p>
                                <strong>Calories:</strong> {totalCalories.toFixed(1)}kcal
                            </p>
                            <br />
                            <p>
                                <strong>Protein:</strong> {totalProtein.toFixed(1)} g
                            </p>
                            <br />
                            <p>
                                <strong>Carbs:</strong> {totalCarbs.toFixed(1)} g
                            </p>
                            <br />
                            <p>
                                <strong>Fats:</strong> {totalFats.toFixed(1)} g
                            </p>
                            <br />
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
            <div id="breakfast-image-section">
                <img
                    id="breakfast-display-image"
                    src={l}
                    alt="Breakfast"
                />
            </div>
</div>
    );
};

export default BreakfastDashboard;