//import { useParams, Routes, Route } from "react-router-dom";
import "./WeekPlanCard.css";

function WeekPlanCard(props) {
    const {recipe} = props
    //const { planId } = useParams();

//the function delete and the state are in the parent (WeekPlanView). It's dangerous to have it here. The state
//must be only in one place, the parent, and pass the delete function as a prop.
return (
    <div className="row WPcard bg-light" key={recipe.id}>
        <p><button id="deleteButtonRecipe" className="btn btn-danger col-2" onClick={(e) => props.deleteRecipe(recipe.id)} title="delete" type="button">X</button> </p>
        <p id="titleRec">{recipe.recipe_title}</p>
        <img src={recipe.recipe_image}/>                  
    </div> 
);
}



export default WeekPlanCard;