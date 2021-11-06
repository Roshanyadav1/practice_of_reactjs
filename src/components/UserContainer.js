import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  useEffect((userData, fetchUsers) => {
    fetchUsers()
    return () => {
      userData.loading ? (
        <h3>Loading</h3>
      ) : userData.error ? (
        <h3>{userData.error}</h3>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.user &&
              userData.user.map((user) => <p>{user.name}</p>)}
          </div>
        </div>
      );
    };
  }, []);

  return <div>Users</div>;
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(UserContainer);
