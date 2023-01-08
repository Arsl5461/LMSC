import React from "react";
import { useState, useEffect } from "react";
// import  useNavigate  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings, reset,deleteBookings } from "../features/bookingsSlice";
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
	const { bookings, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.booking,
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllBookings());
	}, [isError, message, dispatch]);
	console.log(bookings);
	const handleDelete=(id)=>{
dispatch(deleteBookings(id));
	}
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">
									List of Test Bookings
								</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">Patient Name</th>
											<th className="border-0">Patient Phone</th>
											<th className="border-0">Test Name</th>
											<th className="border-0">Date</th>
											<th className="border-0">Time</th>
											<th className="border-0">Approve</th>
											<th className="border-0">Remove</th>

                                            

										</tr>
									</thead>
									<tbody>
										{bookings?.map((item) => {
											return (
												<tr key={item?._id}>
													<td>{item?.bookingname}</td>
													<td>{item?.bookingphone}</td>
													<td>{item?.bookingtest}</td>

													<td>{item?.bookingdate}</td>
													<td>{item?.bookingtime}</td>
                                                    <td><button className="btn btn-success text-dark">Approve</button></td>
                                                    <td><button className="btn btn-danger text-dark" onClick={()=>handleDelete(item?._id)}>Delete</button></td>


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
