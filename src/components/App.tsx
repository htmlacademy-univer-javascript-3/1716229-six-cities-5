import MainPage from "../pages/MainPage.tsx";


type TAppProps ={
    offersCount: number;
}
export default function App({offersCount}:TAppProps): JSX.Element {
	return <MainPage offersCount={offersCount}/>;
}
