import React from "react";
import { useState, useEffect } from "react";
// import  useNavigate  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNewTest, getAllTest, reset } from "../features/testSlice";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Form,
	Navbar,
	Nav,
	Container,
	Row,
	Col,
	Table,
} from "react-bootstrap";

function CreateTest() {
	const dispatch = useDispatch();
	const { tests, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.test,
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllTest());
	}, [ dispatch]);
	const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();

	console.log(tests);
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createNewTest({ title, price, description }));
		setTitle("");
		setPrice("");
		setDescription("");
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card>
							<Card.Header>
								<Card.Title as="h4">Create Test</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={onSubmit}>
									<Row>
										<Col className="pr-1" md="6">
											<Form.Group>
												<label>Title</label>
												<Form.Control
													placeholder="Testname"
													type="text"
													name="title"
													value={title}
													onChange={(e) =>
														setTitle(e.target.value)
													}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className="pl-1" md="6">
											<Form.Group>
												<label>Price</label>
												<Form.Control
													placeholder="Test Price"
													type="text"
													name="price"
													value={price}
													onChange={(e) =>
														setPrice(e.target.value)
													}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className="pl-1" md="6">
											<Form.Group>
												<label>Description</label>
												<Form.Control
													placeholder="Enter Test Description"
													type="text"
													name="description"
													value={description}
													onChange={(e) =>
														setDescription(
															e.target.value,
														)
													}
												></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									{/* <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Quantity</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
									<Button
										className="btn-fill pull-right mt-3"
										type="submit"
										variant="info"
									>
										Create New Test
									</Button>
									<div className="clearfix"></div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">
									List of Tests Available
								</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">
												Test Name
											</th>
											<th className="border-0">
												Test Price
											</th>
											<th className="border-0">
												Description
											</th>
											<th className="border-0">
												Delete Test
											</th>
											<th className="border-0">
												Update Test
											</th>
										</tr>
									</thead>
									<tbody>
										{tests.map((item) => {
											return (
												<tr key={item._id}>
													<td>{item.testname}</td>
													<td>{item.testprice}</td>
													<td>
														{item.description}
													</td>
													<td>
														<Button
															className="btn-fill pull-right mt-3"
															type="submit"
															variant="info"
														>
															Delete
														</Button>
													</td>
													<td>
														<Button
															className="btn-fill pull-right mt-3"
															type="submit"
															variant="info"
														>
															Update
														</Button>
													</td>
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

export default CreateTest;
