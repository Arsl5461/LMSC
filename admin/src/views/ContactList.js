import React from "react";
import { useState, useEffect } from "react";
// import  useNavigate  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllContact, reset } from "../features/contactSlice";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Table,
	Container,
	Row,
	Col,
} from "react-bootstrap";

function ContactList() {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const { contacts, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.contact,
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllContact());
	}, [isError, message, dispatch]);
	console.log(contacts);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">
									List of Contact Users
								</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">Name</th>
											<th className="border-0">Email</th>
											<th className="border-0">
												Message
											</th>
										</tr>
									</thead>
									<tbody>
										{contacts?.map((item) => {
											return (
												<tr key={item?._id}>
													<td>{item?.username}</td>
													<td>{item?.useremail}</td>
													<td>{item?.usermessage}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ContactList;
