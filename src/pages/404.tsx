import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Missing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Not Found</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle size="large">Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Nothing here</h1>
      </IonContent>
    </IonPage>
  );
};

export default Missing;
