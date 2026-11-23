let Etudiants=[];


function SauvegarderEtudiants(){
    localStorage.setItem("etudiants",JSON.stringify(Etudiants));
}

function chargerEtudiants(){
    let donnees=localStorage.getItem("etudiants");
    if(donnees !== null){
        Etudiants=JSON.parse(donnees);
    }
}


function afficherEtudiants(){
    let tableau=document.getElementById("tableau");
    tableau.innerHTML = "";
    Etudiants.forEach(function(etudiant){
        tableau.innerHTML += `
        <tr>
        <td>${etudiant.nom}</td>
          <td>${etudiant.prenom}</td>
            <td>${etudiant.niveau}</td>
              <td>${etudiant.fillière}</td>
                <td><button onclick="SupprimerEtudiants(${etudiant.id})">Supprimer</button> 
                </td>
                </tr> `;
    });
    document.getElementById("Nombre").textContent= "Nombre totale d'etudiants =  " + Etudiants.length ;
}
let bouton=document.getElementById("bouton");
bouton.addEventListener("click",function ajouterEtudiants(){
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("Prenom").value;
    let niveau=document.getElementById("niveau").value;
    let fillière=document.getElementById("fillière").value;

    if(nom==="" || prenom==="" || niveau==="" ||fillière===""){
        alert("veillez remplir tout les cases");
        return;
    }

    let nouvelEtudiant={
        id:Date.now(),
        nom:nom,
        prenom:prenom,
        niveau:niveau,
        fillière:fillière
    };
    Etudiants.push(nouvelEtudiant);
    SauvegarderEtudiants();
    afficherEtudiants();
    console.log(Etudiants);
})

function SupprimerEtudiants(id){
    Etudiants=Etudiants.filter(function(e){
    return e.id !==id;

})
SauvegarderEtudiants();
afficherEtudiants();
console.log(Etudiants);
};

function ModifierEtudiants(id){
    let etudiant=Etudiants.find(function(e){
        return e.id ===id ;
    });

}

chargerEtudiants();
afficherEtudiants();
console.log(Etudiants);
    

