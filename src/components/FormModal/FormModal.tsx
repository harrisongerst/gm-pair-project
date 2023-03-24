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
import { createHabits } from '../../api/services';

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
		completeAmount: Yup.number().min(0, 'Enter a number').required('Required'),
	});

	const formik = useFormik({
		initialValues: {
			habit_name: '',
			icon: '',
			start_date: today,
			end_date: '',
			description: '',
			completeAmount: 0,
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			// state.setUserData((pre) => [...pre, values]);
			createHabits(values);
			state.setModalIsOpen(!state.modalIsOpen);
			formik.resetForm();
			// window.location.reload();
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
						<Form onSubmit={formik.handleSubmit}>
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
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}>
								<option value={''}> </option>
								<option
									value={`https://thumbs.dreamstime.com/z/
								thin-line-running-man-icon-white-background-100364493.jpg`}>
									Running Man
								</option>
							</select>
							<label htmlFor='start_date'>Start Date: </label>
							<input
								type='date'
								id='start_date'
								min={today}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.start_date}
							/>
							<label htmlFor='end_date'>End Date: </label>
							<input
								type='date'
								id='end_date'
								min={today}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.end_date}
							/>
							<label htmlFor='desc'>Description: </label>
							<textarea
								typeof='text'
								id='description'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.description}></textarea>
							{formik.errors.description && formik.touched.description && (
								<ErrorMessage>{formik.errors.description}</ErrorMessage>
							)}
							<label htmlFor='completeAmount'>Completion Amount: </label>
							<input
								id='completeAmount'
								type='number'
								min={0}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.completeAmount &&
								formik.touched.completeAmount && (
									<ErrorMessage>{formik.errors.completeAmount}</ErrorMessage>
								)}

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
