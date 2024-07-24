// src/screens/admin/OrderDetailsScreen.jsx

import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useGetOrderDetailsQuery } from "../../slices/ordersApiSlice";

const OrderDetailsScreen = () => {
    const { id: orderId } = useParams();
    const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId);
  
    return isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error.data.message}</Message>
    ) : (
      <>
        <h1>Order {order._id}</h1>
        {/* Existing Order Details */}
        <ListGroup.Item>
          <h2>Status History</h2>
          <ListGroup variant='flush'>
            {order.orderStatusHistory.map((history, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={4}>{history.status}</Col>
                  <Col md={4}>{new Date(history.date).toLocaleDateString()}</Col>
                  <Col md={4}>{history.updatedBy.name}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </>
    );
  };
  
  export default OrderDetailsScreen;
  