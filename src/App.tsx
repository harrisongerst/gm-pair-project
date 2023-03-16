import { createContext, useState } from 'react';
import './App.css';
import FormModal from './components/FormModal/FormModal';
import Navbar from './components/Header/Navbar';
import { HabitInfo } from './types';
import Home from './pages/Home/Home';

export type Setter = React.Dispatch<React.SetStateAction<HabitInfo[]>>;
export interface State {
	userData: HabitInfo[];
	modalIsOpen?: Boolean;
	setUserData: Setter;
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext<State>({
	userData: [],
	setUserData: () => {},
	modalIsOpen: false,
	setModalIsOpen: () => {},
});

function App() {
	const [data, setData] = useState<HabitInfo[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<StateContext.Provider
			value={{
				userData: data,
				setUserData: setData,
				modalIsOpen: isOpen,
				setModalIsOpen: setIsOpen,
			}}>
			<div className='App'>
				<Navbar />
				<FormModal />
        <Home />
			</div>
		</StateContext.Provider>
	);
}

export default App;
