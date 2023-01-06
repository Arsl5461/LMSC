import React from "react";
import { useState, useEffect } from "react";
// import  useNavigate  from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	createNewSetting,
	getAllSetting,
	reset,
} from "../features/settingSlice";
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

function CreateSetting() {
	const dispatch = useDispatch();
	const { settings, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.setting,
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllSetting());
	}, [isError, message, dispatch]);
	const [open, setOpen] = useState();
	const [close, setClose] = useState();
	const [maxTest, setMaxtest] = useState();

	console.log(settings);
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createNewSetting({ open, close, maxTest }));
		setOpen("");
		setClose("");
		setMaxtest("");
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card>
							<Card.Header>
								<Card.Title as="h4">Create Setting</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={onSubmit}>
									<Row>
										<Col className="pr-1" md="6">
											<Form.Group>
												<label>Opened</label>
												<Form.Control
													placeholder="open Time"
													type="time"
													name="open"
													value={open}
													onChange={(e) =>
														setOpen(e.target.value)
													}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className="pl-1" md="6">
											<Form.Group>
												<label>Closed</label>
												<Form.Control
													placeholder="Close Time"
													type="time"
													name="close"
													value={close}
													onChange={(e) =>
														setClose(e.target.value)
													}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className="pl-1" md="6">
											<Form.Group>
												<label>maxTest</label>
												<Form.Control
													placeholder="MaxTest in One Hour"
													type="number"
													name="maxtest"
													value={maxTest}
													onChange={(e) =>
														setMaxtest(
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
										Create New Setting
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
									List of Setting Available
								</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">
												Open Time
											</th>
											<th className="border-0">
												Close Time
											</th>
											<th className="border-0">
												Max Test
											</th>
											<th className="border-0">
												Delete Setting
											</th>
											<th className="border-0">
												Update Setting
											</th>
										</tr>
									</thead>
									<tbody>
										{settings.map((item) => {
											return (
												<tr key={item._id}>
													<td>{item.openTime}</td>
													<td>{item.closeTime}</td>
													<td>{item.maxTest}</td>

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

export default CreateSetting;
