export const fetchNutritionData = async (food, weight) => {
    const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients"; 
    const APP_ID = "a5e769d1";  
    const APP_KEY = "cfda80c63399d5d0fbb0b0988691cd5d";  

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-app-id": APP_ID,
                "x-app-key": APP_KEY,
            },
            body: JSON.stringify({ query: `${weight}g ${food}` }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.foods && data.foods.length > 0) {
            const foodData = data.foods[0];
            return {
                calories: foodData.nf_calories || 0,
                protein: foodData.nf_protein || 0,
                carbs: foodData.nf_total_carbohydrate || 0,
                fats: foodData.nf_total_fat || 0,
            };
        }
    } catch (error) {
        console.error("Error fetching nutrition data:", error);
    }

    return { calories: 0, protein: 0, carbs: 0, fats: 0 };
};