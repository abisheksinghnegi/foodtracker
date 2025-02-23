import React, { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Breakfast.css";
import brea from '../images/breakfast.png'

const Breakfast = () => {
    const [logs, setLogs] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFats, setTotalFats] = useState(0);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "foodLogs"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const breakfastLogs = data.filter(item => item.mealType === "Breakfast");

            setLogs(breakfastLogs);

            let calories = 0, protein = 0, carbs = 0, fats = 0;
            breakfastLogs.forEach(item => {
                calories += item.calories || 0;
                protein += item.protein || 0;
                carbs += item.carbs || 0;
                fats += item.fats || 0;
            });

            setTotalCalories(calories);
            setTotalProtein(protein);
            setTotalCarbs(carbs);
            setTotalFats(fats);
        } catch (error) {
            console.error("Error fetching food logs:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "foodLogs", id));
            fetchLogs();
        } catch (error) {
            console.error("Error deleting food log:", error);
        }
    };

    const chartData = {
        labels: ["Calories", "Protein", "Carbs", "Fats"],
        datasets: [
            {
                label: "Breakfast Intake",
                data: [totalCalories, totalProtein, totalCarbs, totalFats],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
        ],
    };

    return (
        <div id="break">
        <div className="breakfast-container">
            <div className="chart-container">
                <Bar data={chartData} />
            </div>
            <div id="summ">
            <div className="summary-card">
            <h2>Breakfast Intake</h2>
            <br />
                <p><strong>Total Calories:</strong> {totalCalories} kcal</p>
                <br />
                <p><strong>Protein:</strong> {totalProtein} g</p>
                <br />
                <p><strong>Carbs:</strong> {totalCarbs} g</p>
                <br />
                <p><strong>Fats:</strong> {totalFats} g</p>
            </div>
            <br />
            <br />


            <h3>Logged Foods</h3>
            <br />
            <ul className="food-list">
                {logs.map((log) => (
                    <li key={log.id} className="food-item">
                        {log.food} ({log.weight}g) - {log.calories} kcal
                        <button className="remove-btn" onClick={() => handleDelete(log.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <div>
            <img id="breaimg" src={brea} alt="aaa" />
        </div>
    </div>
    );
};

export default Breakfast;
