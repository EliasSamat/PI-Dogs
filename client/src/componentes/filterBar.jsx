import React, { useState } from "react";
import "../style/HomePage.css"
function FilterBar({ onFilterChange }) {
  const [selectedTemperament, setSelectedTemperament] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [orderBy, setOrderBy] = useState("asc");

  const handleTemperamentChange = (event) => {
    setSelectedTemperament(event.target.value);
  };

  const handleOriginChange = (event) => {
    setSelectedOrigin(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };
  
  

  const handleFilterClick = () => {
    onFilterChange(selectedTemperament, selectedOrigin, orderBy);
  };
  
  return (
    <div className="filter-bar">
      <label htmlFor="temperament-filter">Filtrar por temperamento:</label>
      <select
        id="temperament-filter"
        value={selectedTemperament}
        onChange={handleTemperamentChange}
      >
        <option value="">Todos</option>
        <option value="Aloof">Aloof</option>
        <option value="Clownish">Clownish</option>
        <option value="Dignified">Dignified</option>
          <option value="Independent">Independent</option>
          <option value= "Happy">feliz</option>
          <option value= "Wild">Wild</option>
          <option value= "Hardworking">Hardworking</option>
          <option value="Dutiful">Dutiful</option>
          <option value="Outgoing">Outgoing</option>
          <option value="Friendly">Friendly</option>
           <option value="Alert">Alert</option>
           <option value="Confident">Confident</option>
            <option value="Intelligent">Intelligent</option>
             <option value="Courageous">Courageous</option>
              <option  value= "Loyal">Loyal</option>
              <option  value= "Docile">Docile</option>
               <option value= "Responsive">Responsive</option>
               <option value= "Composed">Composed</option>
               <option value= "Receptive">Receptive</option>
               <option value= "Faithful">Faithful</option>
               <option value= "Loving">Loving</option>
               <option value="Protective">Protective</option>
               <option value="Trainable">Trainable</option>
               <option value="Responsible">Responsible</option>
               <option value= "Energetic">Energetic</option>
               <option value= "Gentle">Gentle</option>
               <option value= "Affectionate">Affectionate</option>
               <option value= "Devoted">Devoted</option>
               <option value="Assertive">Assertive</option>
               <option value= "Dominant">Dominant</option>
               <option value="Strong Willed">Strong Willed</option>
               <option value="Obedient">Obedient</option>
               <option value="Reserved">Reserved</option>
               <option value="Kind">Kind</option>
               <option value="Sweet-Tempered">Sweet-Tempered</option>
               <option value="Tenacious">Tenacious</option>
               <option value="Attentive">Attentive</option>
               <option value="Steady">Steady</option>
               <option value="Bold">Bold</option>
               <option value="Proud">Proud</option>
               <option value="Reliable">Reliable</option>
               <option value="Fearless">Fearless</option>
               <option value="Lively">Lively</option>
               <option value="Self-assured">Self-assured</option>
               <option value="Cautious">Cautious</option>
               <option value="Eager">Eager</option>
               <option value="Good-natured">Good-natured</option>
               <option value="Spirited">Spirited</option>
               <option value="Companionable">Companionable</option>
               <option value="Even Tempered">Even Tempered</option>
               <option value="Rugged">Rugged</option>
               <option value="Fierce">Fierce</option>
               <option value="Refined">Refined</option>
               <option value="Joyful">Joyful</option>
               <option value="Agile">Agile</option>
               <option value="Amiable">Amiable</option>
               <option value="Excitable">Excitable</option>
               <option value="Determined">Determined</option>
               <option value="Self-confidence">Self-confidence</option>
               <option value="Hardy">Hardy</option>
               <option value="Calm">Calm</option>
               <option value="Good-tempered">Good-tempered</option>
               <option value="Watchful">Watchful</option>
               <option value="Hard-working">Hard-working</option>
               <option value="Feisty">Feisty</option>
               <option value="Cheerful">Cheerful</option>
               <option value="Sensitive">Sensitive</option>
               <option value="Easygoing">Easygoing</option>
               <option value="Adaptable">Adaptable</option>
               <option value="Trusting">Trusting</option>
               <option value="Lovable">Lovable</option>
               <option value="Territorial">Territorial</option>
               <option value="Keen">Keen</option>
               <option value="Familial">Familial</option>
               <option value="Rational">Rational</option>
               <option value="Bright">Bright</option>
               <option value="Quick">Quick</option>
               <option value="Powerful">Powerful</option>
               <option value="Gay">Gay</option>
               <option value="Stable">Stable</option>
               <option value="Quiet">Quiet</option>
               <option value="Inquisitive">Inquisitive</option>
               <option value="Strong">Strong</option>
               <option value="Sociable">Sociable</option>
               <option value="Patient">Patient</option>
               <option value="Suspicious">Suspicious</option>
               <option value="Great-hearted">Great-hearted</option>
               <option value="Merry">Merry</option>
               <option value="Vocal">Vocal</option>
               <option value="Tolerant">Tolerant</option>
               <option value="Mischievous">Mischievous</option>
               <option value="People-Oriented">People-Oriented</option>
               <option value="Bossy">Bossy</option>
               <option value="Cunning">Cunning</option>
               <option value="Athletic">Athletic</option>
               <option value="Boisterous">Boisterous</option>
               <option value="Cooperative">Cooperative</option>
               <option value="Trustworthy">Trustworthy</option>
               <option value="Self-important">Self-important</option>
               <option value="Respectful">Respectful</option>
                 <option value="Thoughtful">Thoughtful</option>
                 <option value="Generous">Generous</option>
                 <option value="Cat-like">Cat-like</option>
                 <option value="Sturdy">Sturdy</option>
                 <option value="Benevolent">Benevolent</option>
                 <option value="Clever">Clever</option>
                 <option value="Bubbly">Bubbly</option>
                 <option value="Opinionated">Opinionated</option>
                 <option value="Aggressive">Aggressive</option>
                 <option value="Extroverted">Extroverted</option>
                 <option value="Charming">Charming</option>
                 <option value="Unflappable">Unflappable</option>
        <option value="Spunky">Spunky</option>
        <option value="Diligent">Diligent</option>
        <option value="Willful">Willful</option>
        <option value="Fast">Fast</option>
        <option value="Vigilant">Vigilant</option>
        <option value="Fun-loving">Fun-loving</option>
        <option value="Active">Active</option>
        <option value="Adventurous">Adventurous</option>
        <option value="Playful">Playful</option>
        <option value="Curious">Curious</option>
        <option value="Stubborn">Stubborn</option>
      </select>


      <label htmlFor="origin-filter">Filtrar por origen:</label>
      <select
        id="origin-filter"
        value={selectedOrigin}
        onChange={handleOriginChange}
      >
        <option value="">Todos</option>
        <option value="API">API</option>
        <option value="Base de datos">Base de datos</option>
    
      </select>
      <label htmlFor="ordenamiento-AZ">ordenamiento</label>
      <select
        id=" ordenamiento-AZ"
        value={orderBy}
        onChange={handleOrderChange}
      >

        <option value="">Todos</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="mayor">mayor peso</option>
        <option value="menor">menor peso</option>
      </select>

      <button onClick={handleFilterClick}>Filtrar</button>
    </div>
  );
}

export default FilterBar;
