import {
	Button,
	ModalContainer,
	ModalOverlay,
	Form,
	ErrorMessage,
} from './FormModal.styled';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { useContext } from 'react';
import { StateContext } from '../../App';
import * as Yup from 'yup';

export default function FormModal() {
	const today = format(new Date(), 'yyyy-MM-dd');
	const state = useContext(StateContext);

	const SignupSchema = Yup.object().shape({
		habit_name: Yup.string()
			.min(2, 'Too Short!')
			.max(10, 'Too Long!')
			.required('Required'),
		description: Yup.string()
			.min(2, 'Too Short!')
			.max(100, 'Too Long!')
			.required('Required'),
	});

	const formik = useFormik({
		initialValues: {
			habit_name: '',
			icon: '',
			start_date: today,
			description: '',
			completeAmount: 10,
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			state.setUserData((pre) => [...pre, values]);
			state.setModalIsOpen(!state.modalIsOpen);
			formik.resetForm();
		},
	});

	const handleClose = () => {
		state.setModalIsOpen(!state.modalIsOpen);
	};

	return (
		<div>
			{state.modalIsOpen && (
				<ModalOverlay show='flex'>
					<ModalContainer>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								formik.handleSubmit();
							}}>
							<label htmlFor='habit_name'>Habit Name: </label>
							<input
								type='text'
								id='habit_name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.habit_name}
							/>
							{formik.errors.habit_name && formik.touched.habit_name && (
								<ErrorMessage>{formik.errors.habit_name}</ErrorMessage>
							)}
							<label htmlFor='icon'>Habit Icon: </label>
							<select
								id='icon'
								onChange={formik.handleChange}>
								<option value={''}> </option>
								<option
									value={`https://thumbs.dreamstime.com/z/
								thin-line-running-man-icon-white-background-100364493.jpg`}>
									Running Man
								</option>
							</select>
							{formik.errors.habit_name && formik.touched.habit_name && (
								<ErrorMessage>{formik.errors.habit_name}</ErrorMessage>
							)}
							<label htmlFor='start_date'>Start Date: </label>
							<input
								type='date'
								id='start_date'
								min={today}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.start_date}
							/>
							<label htmlFor='desc'>Description: </label>
							<textarea
								typeof='text'
								id='description'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.description}></textarea>
							<div>
								<button
									type='reset'
									onClick={(e) => {
										formik.resetForm();
										handleClose();
									}}>
									Cancel
								</button>
								<Button type='submit'>Submit</Button>
							</div>
						</Form>
					</ModalContainer>
				</ModalOverlay>
			)}
		</div>
	);
}
