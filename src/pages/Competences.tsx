import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Competence from '../models/Competence';
import CompetencesService from '../services/CompetencesService';
import './Competences.css';

const Competences: React.FC = () => {
  const [competences, setCompetences] = useState<Competence[]>([]);

  useEffect(() => {
    CompetencesService.getCompetences().then(competences => setCompetences(competences));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compétences</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Link to="/competences/ajouter" style={{ textDecoration: "none" }}>
          <IonButton expand="block" color='success'>Nouvelle compétence</IonButton>
        </Link>

        {competences.map(competence => {
          return (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{competence.titre}</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>{competence.description}</IonCardContent>
            </IonCard>
          )
        })}

      </IonContent>
    </IonPage>
  );
};

export default Competences;
