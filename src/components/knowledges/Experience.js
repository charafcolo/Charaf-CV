import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            <div className='exp-1'>
                <h4>Développeur backend (lead dev)</h4>
                <h5>28 avril 2022-27 mai 2022 (stage)</h5>
                <p>
Création du site Udruga (gestion d'évènements pour les associations) dans un environnement professionnel (Méthode AGILE SCRUM). 4 sprints de 5 jours, 3 dev Symfony + 3 dev React, création de la base de données avec MySQL, les endpoints de l'API, la sécurisation de l'application, le déploiement sur AWS, etc.</p>
               
            </div> 
            <div className='exp-2'>
                <h4>Technicien support</h4>
                <h5>2012-2022</h5>
                <p>Technicien Support Orange Pro : mise en service/dépannage réseau adsl/fibre, téléphonies mutilignes (oppo), création de ticket d'intervention, paramétrage avancé de la Livebox Pro ... </p>
                <p>Technicien Support Canal Plus (nouvelle technologie) : dépannage et mise en services des comptes web et mobile des abonnés C+</p>
            </div> 
            <div className='exp-3'>
                <h4>Technicien d'assistance en informatique</h4>
                <h5>février 2012- mai 2012</h5>
                <p>Inventaire parc informatique (Mairie, CCAS, Bibliothèque municipale).
Installation, configuration et la mise à jour des postes de travail (Mairie, CCAS, Bibliothèque municipale).
Assistance d’utilisateur.
Dépannage des matériels et des logiciels. </p>
            </div> 

        </div>
    );
};

export default Experience;