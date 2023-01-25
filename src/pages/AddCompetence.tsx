import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonRedirect, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import CompetencesService from '../services/CompetencesService';
import Competence from './../models/Competence';


const AddCompetence: React.FC = () => {
    const [id] = useState<number>(new Date().getTime());
    const [titre, setTitre] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleTitre = (event: CustomEvent) => {
        setTitre(event.detail.value);
    };

    const handleDescription = (event: CustomEvent) => {
        setDescription(event.detail.value);
    };

    const handleSubmit = () => {
        const newCompetence = new Competence(id, titre, description);
        CompetencesService.addCompetence(newCompetence).then(() => {
            CompetencesService.getCompetences();
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Nouvelle compétence</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonInput
                    name="titre"
                    placeholder="Titre..."
                    value={titre}
                    onIonChange={handleTitre}
                />
                <IonTextarea
                    name="description"
                    placeholder="Description..."
                    value={description}
                    onIonChange={handleDescription}
                />
                <IonButton onClick={handleSubmit}>Ajouter</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default AddCompetence;
