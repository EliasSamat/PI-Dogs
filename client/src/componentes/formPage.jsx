import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/formPage.css"

function FormPage() {
  const [nombre, setNombre] = useState("");
  const [alturaMin, setAlturaMin] = useState("");
  const [alturaMax, setAlturaMax] = useState("");
  const [pesoMin, setPesoMin] = useState("");
  const [pesoMax, setPesoMax] = useState("");
  const [aniosDeVida, setAniosDeVida] = useState("");
  const [imagen, setImagen] = useState(""); 
  const [temperamentos, setTemperamentos] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  
  const validateForm = () => {
    if (!nombre || !alturaMin || !alturaMax || !pesoMin || !pesoMax || !aniosDeVida || !imagen || temperamentos.length === 0) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    setError("");
    return true;
  };
  const validateNumero = (value ) => {
    return !isNaN(value) && value >= 0 ;
  };
  const validateNombre = (value) => {
    const hasNumber = /\d/.test(value);
    return !hasNumber;
  };
  const handleTemperamentoChange = (e) => {
  const selectedTemperamento = e.target.value;
  if (!temperamentos.includes(selectedTemperamento)) {
    setTemperamentos([...temperamentos, selectedTemperamento]);
  }
};  
const handleRemoveTemperamento = (index) => {
  // Crea una copia del array de temperamentos
  const newTemperamentos = [...temperamentos];
  // Elimina el temperamento en el índice dado
  newTemperamentos.splice(index, 1);
  // Actualiza el estado con la nueva lista de temperamentos
  setTemperamentos(newTemperamentos);
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) { 
      // Crea el objeto de la nueva raza con los datos recopilados
      const nuevaRaza = {
        
        name: nombre,
        height: `${alturaMin} - ${alturaMax}`,
        weight: `${pesoMin} - ${pesoMax}`,
        lifespan: aniosDeVida,
        temperaments: temperamentos , // Envía los datos de los temperamentos
        image: imagen,
      };
  
      // Envía los datos al servidor
      fetch("http://localhost:3001/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaRaza),
      })
        .then((response) => response.json())
        .then((data) => {
          // Procesar la respuesta del servidor, si es necesario
          console.log(data);
          setSuccessMessage("¡La raza fue creada con éxito!");
        })
        .catch((error) => {
          console.error("Error al enviar los datos al servidor:", error);
        });
    }
  };
  

  return (
    <div>
      <h1>CREA TU PERRO{temperamentos}</h1>
      <form onSubmit={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
        <label>
          Nombre :
          <input    
           type="text"
    value={nombre}
    onChange={(e) => {
      const newValue = e.target.value;
      if (validateNombre(newValue) ) {
        setNombre(newValue);
        setError("");
      } else {
        setError("El nombre no puede contener números.");
      }
      
    }}
 />
        </label>
        <hr/>

        <label>
          Altura (Mínima) :
          <input  
          type="text"
          value={alturaMin}
          onChange={(e) => {
      const newValue = e.target.value;
      if (validateNumero(newValue)) {
        setAlturaMin(newValue);
        setError("");
      } else {
        setError("La altura mínima debe ser un número válido.");
      }
      
    }} />
        </label>
        <hr/>

        <label>
          Altura (Máxima) :
          <input  type="text"
    value={alturaMax}
    onChange={(e) => {
      const newValue = e.target.value;
      if (validateNumero(newValue)) {
        setAlturaMax(newValue);
        setError("");
      } else {
        setError("La altura mínima debe ser un número válido.");
      }
      if (parseFloat(newValue) > parseFloat(alturaMin)){
        setError("")
      }else {setError("debe ser mayor a la altura minima") }
    }} />
        </label>
        <hr/>

        <label>
          Peso (Mínimo) :
          <input  type="text"
    value={pesoMin}
    onChange={(e) => {
      const newValue = e.target.value;
      if (validateNumero(newValue)) {
        setPesoMin(newValue);
        setError("");
      } else {
        setError("La altura mínima debe ser un número válido.");
      }
    }} />
        </label>
        <hr/>

        <label>
          Peso (Máximo) :
          <input type="text"
    value={pesoMax}
    onChange={(e) => {
      const newValue = e.target.value;
      if (validateNumero(newValue)) {
        setPesoMax(newValue);
        setError("");
      } else {
        setError("La altura mínima debe ser un número válido.");
      }
      if (parseFloat(newValue) > parseFloat(pesoMin)){
        setError("")
      }else{
        setError("tiene que ser mayor al peso minimo")
      }
    }} />
        </label>
        <hr/>

        <label>
          Años de Vida :
          <input  type="text"
    value={aniosDeVida}
    onChange={(e) => {
      const newValue = e.target.value;
      if (validateNumero(newValue)) {
        setAniosDeVida(newValue);
        setError("");
      } else {
        setError("La altura mínima debe ser un número válido.");
      }
      if(newValue <= 30){
        setError("")
      }else{
setError("debe ser una edad valida")
      }
    }} />
        </label>
        <hr/>

        <label>
          Temperamentos :
          <select onChange={handleTemperamentoChange}>
            <option value="">Seleccionar Temperamento</option> 
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
          <ul>
            {temperamentos.map((temp, index) => (
              <li key={index}>{temp} <button
              type="button"
              onClick={() => handleRemoveTemperamento(index)}
            >
              X
            </button></li>
            ))}
          </ul>
        </label>
        <hr/>
        <label>
          imagen : 
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </label>
        <button type="submit">Crear Nueva Raza </button>
        <Link to = "/homePage">
          <h1>home</h1>
        </Link>
      </form>
    </div>
  );
}

export default FormPage;
 