import axios from "axios";
import CurrentUserLoader from "./CurrentUserLoader";
import DataSource from "./DataSource";
import ProductInfo from "./ProductInfo";
import ResourceLoader from "./ResourceLoader";
import UserInfo from "./UserInfo";
import UserLoader from "./UserLoader";

// const getDataUserById = (id) => async () => {
//   const response = await axios.get(`http://localhost:8080/users/${id}`);
//   return response.data;
// };

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => {
  return <h1>{message}</h1>;
};

const App = () => {
  return (
    <>
      {/* <fieldset>
        <legend>Current User Loader and User Loader</legend>
        <fieldset>
          <legend>Get Current User</legend>
          <CurrentUserLoader>
            <UserInfo />
          </CurrentUserLoader>
        </fieldset>
        <br />
        <hr />
        <br />
        <fieldset>
          <legend>Get User By Id</legend>
          <UserLoader userId="13">
            <UserInfo />
          </UserLoader>
          <hr />
          <UserLoader userId="14">
            <UserInfo />
          </UserLoader>
          <hr />
          <UserLoader userId="15">
            <UserInfo />
          </UserLoader>
        </fieldset>
      </fieldset>
      <br />
      <hr />
      <br />
      <fieldset>
        <legend>Resource Loader</legend>
        <fieldset>
          <legend>Get User By Id</legend>
          <ResourceLoader
            resourceName="user"
            resourceUrl="http://localhost:8080/users/13"
          >
            <UserInfo />
          </ResourceLoader>
        </fieldset>
        <fieldset>
          <legend>Get Product By Id</legend>
          <ResourceLoader
            resourceName="product"
            resourceUrl="http://localhost:8080/products/2"
          >
            <ProductInfo />
          </ResourceLoader>
        </fieldset>
      </fieldset>
      <br />
      <hr />
      <br /> */}
      <fieldset>
        <legend>Data Source Loader</legend>
        <fieldset>
          <legend>Get User By Id</legend>
          <DataSource
            getDataFunc={getServerData("http://localhost:8080/users/13")}
            resourceName="user"
          >
            <UserInfo />
          </DataSource>
          <br />
          <hr />
          <br />
          <DataSource
            getDataFunc={getServerData("http://localhost:8080/users/14")}
            resourceName="user"
          >
            <UserInfo />
          </DataSource>
        </fieldset>
        <br />
        <hr />
        <br />
        <fieldset>
          <legend>Get Product By Id</legend>
          <DataSource
            getDataFunc={getServerData("http://localhost:8080/products/1")}
            resourceName="product"
          >
            <ProductInfo />
          </DataSource>
          <br />
          <hr />
          <br />
          <DataSource
            getDataFunc={getServerData("http://localhost:8080/products/2")}
            resourceName="product"
          >
            <ProductInfo />
          </DataSource>
        </fieldset>
        <fieldset>
          <br />
          <hr />
          <br />
          <fieldset>
            <legend>Get User From LocalStorage</legend>
            <DataSource
              getDataFunc={getLocalStorageData("message")}
              resourceName="message"
            >
              <Text />
            </DataSource>
          </fieldset>
        </fieldset>
      </fieldset>
    </>
  );
};

export default App;
