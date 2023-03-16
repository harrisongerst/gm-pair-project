import React, { useState } from 'react';
import { Button, ModalContainer, ModalOverlay, Form } from './FormModal.styled';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { useContext } from 'react';
import { StateContext } from '../../App';

export default function FormModal() {
	const today = format(new Date(), 'yyyy-MM-dd');
	const state = useContext(StateContext);

	const formik = useFormik({
		initialValues: {
			habit_name: '',
			// icon: null,
			start_date: today,
			description: '',
		},
		// validationSchema: SignupSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			console.log(values);
			// state.setUserData();
		},
	});

	const handleClose = () => {
		state.setModalIsOpen(!state.modalIsOpen);
	};

	console.log(state.modalIsOpen);

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
							<label htmlFor='icon'>Habit Icon: </label>
							<select>
								<option></option>
							</select>
							{/* type='select'
							id='icon'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							// value={formik.values.icon}
						/> */}
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
									onClick={handleClose}>
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
