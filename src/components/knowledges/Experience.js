import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>

            <div className='exp-1'>
                <h4>Développeur C# .NET</h4>
                <h5>novembre 2022 - janvier 2022</h5>
             <ul>
                <li>MOJA : application de gestion de recherche d'emploi</li>
                <li>Equipe : 4 développeurs C# .NET</li>
                    Versionnig : Git/Github <li></li>
                <li>Technos et architecture : C# .NET, ASP.NET, MVC, HTML/CSS, Entity Framework 6(LINQ), MSSQL Server</li>

             </ul>
            </div> 
            <div className='exp-2'>
                <h4>Développeur backend (lead dev)</h4>
                <h5>avril 2022 - mai 2022 </h5>
                <p>
                    Création du site Udruga (gestion d'évènements pour les associations) dans un environnement professionnel (Méthode AGILE SCRUM). 4 sprints de 5 jours, 3 dev Symfony + 3 dev React, création de la base de données avec MySQL, les endpoints de l'API, la sécurisation de l'application, le déploiement sur AWS, etc.</p>

            </div>

            <div className='exp-3'>
                <h4>Technicien support | Informatique</h4>
                <h5>2012-2022</h5>
                <p>Technicien Support Orange Pro : mise en service/dépannage réseau adsl/fibre, téléphonies mutilignes (oppo), création/traitement de ticket d'intervention, paramétrage avancé de la Livebox Pro. </p>
                <p>Technicien Support Canal Plus (nouvelle technologie) : dépannage et mise en services des comptes web et mobile des abonnés C+</p>
            </div>


        </div>
    );
};

export default Experience;