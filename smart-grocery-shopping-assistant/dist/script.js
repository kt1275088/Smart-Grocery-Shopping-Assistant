// Grocery List Functions
function addGroceryItem() {
    const groceryItem = document.getElementById('groceryItem').value;
    if (groceryItem.trim() === "") return;
    
    const li = document.createElement('li');
    li.textContent = groceryItem;
    
    const groceryList = document.getElementById('groceryList');
    groceryList.appendChild(li);
    
    document.getElementById('groceryItem').value = "";
}

// Recipe Finder Function
function findRecipes() {
    const ingredient = document.getElementById('ingredient').value;
    if (ingredient.trim() === "") return;
    
    const recipes = [
        { name: "Pasta Primavera", ingredients: ["pasta", "tomato", "zucchini"] },
        { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato"] },
        { name: "Veggie Stir Fry", ingredients: ["broccoli", "carrot", "soy sauce"] }
    ];
    
    const result = recipes.filter(recipe => recipe.ingredients.includes(ingredient.toLowerCase()));
    
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = "";
    
    if (result.length > 0) {
        result.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.textContent = recipe.name;
            recipesDiv.appendChild(recipeDiv);
        });
    } else {
        recipesDiv.textContent = "No recipes found.";
    }
}

// Budget Tracker Function
let totalBudget = 0;
let totalSpent = 0;

function updateBudget() {
    const budget = parseFloat(document.getElementById('budget').value);
    const spent = parseFloat(document.getElementById('spent').value);
    
    if (!isNaN(budget)) totalBudget = budget;
    if (!isNaN(spent)) totalSpent += spent;
    
    const budgetStatus = document.getElementById('budgetStatus');
    const remaining = totalBudget - totalSpent;
    
    if (remaining >= 0) {
        budgetStatus.textContent = `You have $${remaining.toFixed(2)} remaining.`;
        budgetStatus.style.color = 'green';
    } else {
        budgetStatus.textContent = `You are over budget by $${Math.abs(remaining).toFixed(2)}.`;
        budgetStatus.style.color = 'red';
    }
    
    document.getElementById('budget').value = "";
    document.getElementById('spent').value = "";
}