import React, { useState } from "react";
import { db } from "../api/firebase";
import { collection, addDoc } from "firebase/firestore";
import { fetchNutritionData } from "../api/nutritionix";
import "../styles/Logfood.css";
import fd from '../images/food.png'

const LogFood = () => {
    const [food, setFood] = useState("");
    const [weight, setWeight] = useState("");
    const [mealType, setMealType] = useState("Breakfast");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!food || !weight) return;

        const nutrition = await fetchNutritionData(food, weight);

        await addDoc(collection(db, "foodLogs"), {
            food,
            weight: Number(weight),
            mealType,
            ...nutrition,
            timestamp: new Date(),
        });

        setFood("");
        setWeight("");
    };

    return (
        <div id="one">
            <div id="log">
                <div class="sring">Tracking
                    <span id="spaned"></span>
                </div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input"
                    type="text"
                    placeholder="Enter food (e.g., apple)"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    />
                <input className="input"
                    type="number"
                    placeholder="Weight in grams"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                    <div>
                <select id="select" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Dinner">Dinner</option>
                </select>
                <button id="submit" type="submit">Log Food</button>
                </div>
                </form>
                </div>
                <div id="imggcon">
                    <img id="imggw" src={fd} alt="a" />
                </div>
        </div>
    );
};

export default LogFood;
