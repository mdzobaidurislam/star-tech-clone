import Link from 'next/link';
import React, {useEffect} from 'react';
import Layout from '../components/Layout';
import {FETCH_ORDER_API} from '../action/orderAction';
import {useDispatch, useSelector} from 'react-redux';
import AccountLayout from '../components/AccountLayout';
import Loading from '../components/Loading';

function OrderHistoryScreen() {
  const state = useSelector(state => state.orderStore);
  const {loading, error, orders} = state;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch(FETCH_ORDER_API());
    };
    fetchOrders();
  }, [dispatch]);
  return (
    <Layout title="Order History">
      <AccountLayout>
        <div className="bg-[#ffffff] rounded-lg  p-[30px] shadow-sm m-4 ">
          <h1 className="mb-4 text-xl text-secondary font-[700]">
            Order History
          </h1>
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">ID</th>
                    <th className="p-5 text-left">DATE</th>
                    <th className="p-5 text-left">TOTAL</th>
                    <th className="p-5 text-left">PAID</th>
                    <th className="p-5 text-left">DELIVERED</th>
                    <th className="p-5 text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map(order => (
                    <tr key={order._id} className="border-b">
                      <td className=" p-5 ">{order._id}</td>
                      <td className=" p-5 ">
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className=" p-5 ">${order.totalPrice}</td>
                      <td className=" p-5 ">
                        {order.isPaid ? (
                          `${order.paidAt.substring(0, 10)}`
                        ) : (
                          <span className="ml-1 rounded-full bg-secondary px-2 py-1 text-xs font-bold text-[#fff] ">
                            Not paid
                          </span>
                        )}
                      </td>
                      <td className=" p-5 ">
                        {order.isDelivered ? (
                          `${order.deliveredAt.substring(0, 10)}`
                        ) : (
                          <span className="ml-1 rounded-full bg-primary px-2 py-1 text-xs font-bold text-white ">
                            Pending
                          </span>
                        )}
                      </td>
                      <td className=" p-5 ">
                        <Link href={`/order/${order._id}`} legacyBehavior>
                          <a className="ctm_btn p-[10px_30px] inline-block">
                            Details
                          </a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </AccountLayout>
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
