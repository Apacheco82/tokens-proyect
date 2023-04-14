import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";

import {Context} from "../store/appContext";

export const Demo = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className="container text-warning" id="esp">
      <h5>Normas de los Canteros</h5>{" "}
      <ul>
        <li>
          Solo pueden ser admitidos hijos de los miembros o quienes hayan
          salvado a uno de ellos.
        </li>
        <li>Los recién llegados son sometidos a una iniciación obligatoria.</li>
        <li>
          Los miembros se reconocen entre sí por un saludo secreto y que no
          puede ser enseñado a nadie que no pertenezca al club.
        </li>
        <li>Los miembros se identifican por números y no por nombres.</li>
        <li>En ésta logia no pueden entrar ni mujeres ni niños.</li>
      </ul>
      <h5>Composición y rituales de entrada</h5>
      <p>
        Para ser incluido, el futuro miembro tiene que seguir una de las
        siguientes condiciones:
      </p>
      <ul>
        <li>Ser familiar de un Cantero.</li>
        <li>Haber salvado a un miembro.</li>
      </ul>
      <p>
        {" "}
        Luego, para conseguir ser miembro se tienen que superar los siguientes
        actos:
      </p>
      <ul>
        <li>
          El acto de fe: el futuro integrante es vendado en los ojos y debe
          saltar desde un sexto piso, para demostrar carácter.
        </li>
        <li>
          Cruzando el desierto: El futuro miembro es golpeado por siete Canteros
          con las paletas en la parte del trasero
        </li>
        <li>
          El ojo que no parpadea: Es exactamente lo mismo que Cruzando el
          desierto.
        </li>
        <li>
          El desastre de Hesperus: Es exactamente lo mismo que Cruzando el
          desierto y El ojo que no parpadea.
        </li>
        <li>
          La nalgada en el trasero hinchado (con paletas): Es exactamente lo
          mismo que Cruzando el desierto, El ojo que no parpadea y El desastre
          de Hesperus.
        </li>
        <li>
          {" "}
          El juramento: los futuros miembros deberán jurar, con una mano en el
          Libro de los Canteros deben decir: "Y pido ante el pergamino sagrado
          que si revelo los secretos de los Canteros se me hinche el estómago y
          se me caiga todo el cabello de la cabeza excepto tres así sea".
        </li>
      </ul>
      <h5>Beneficios</h5>
      <p> Ser un Cantero tiene varios beneficios:</p>
      <ul>
        <li>
          Tienen mejores plazas de aparcamiento en la Planta Nuclear o se le dan
          patines para llegar más rapido a la entrada.
        </li>
        <li>
          {" "}
          Un anillo con el signo de los Canteros, con el que se pueden obtener
          latas de gaseosas gratis en los expendedores.
        </li>
        <li>
          Mejores sillas en el puesto de trabajo, equipado con el nombre
          respectivo.
        </li>
        <li>
          Un túnel secreto para evitar tener que estar parado en
          embotellamientos durante el viaje, se puede disfrutar de la música
          clásica y pinturas en las paredes.
        </li>
        <li>Una etiqueta para no obtener multas por exceso de velocidad</li>
        <li>
          Otra que impide que el médico de urgencia en el tratamiento robe la
          cartera
        </li>
        <li>El número real de emergencia es 912 en lugar de 911. </li>
        <li>
          Plomeros: Trabajan mejor y más rapido cuando se dan cuenta de que sus
          clientes también son Canteros.
        </li>
      </ul>

      <Link to="/">
        <button className="btn btn-warning">Close</button>
      </Link>
    </div>
  );
};
