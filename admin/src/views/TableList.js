import React from "react";
import { useState, useEffect } from "react";
// import  useNavigate  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, reset } from "../features/registerUserSlice";
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

function TableList() {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const { users, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.user,
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllUsers());
	}, [isError, message, dispatch]);
	console.log(users);
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">
									List of Registered Users
								</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">Name</th>
											<th className="border-0">Email</th>
											<th className="border-0">Phone</th>
											<th className="border-0">City</th>
										</tr>
									</thead>
									<tbody>
										{users?.map((item) => {
											return (
												<tr key={item?._id}>
													<td>{item?.name}</td>
													<td>{item?.email}</td>
													<td>{item?.phone}</td>
													<td>{item?.city}</td>
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

export default TableList;
