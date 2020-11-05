import React from "react";

class UserOutput extends React.Component {
  render() {
    return (
      <div>
        {/* Inline Styling */}
        <p style={{ color: "blue", margin: "1rem" }}>
          Username : {this.props.username}
        </p>
        <p>
          Tempor occaecat minim exercitation incididunt cillum sit id
          exercitation. Proident quis Lorem labore amet ex proident deserunt
          nostrud ea id ut id occaecat. Anim ea consectetur mollit quis ullamco
          deserunt commodo voluptate ad mollit. Quis occaecat eu excepteur do
          reprehenderit fugiat incididunt ut sunt consequat sit. Fugiat
          incididunt pariatur pariatur excepteur.
        </p>
        <p style={{ color: "red" }}>
          Labore non incididunt non consectetur labore eu irure labore velit
          enim do reprehenderit ea occaecat. Ex occaecat irure Lorem culpa.
          Officia pariatur commodo dolor sint laboris culpa minim irure labore.
          Dolore adipisicing aute laboris veniam reprehenderit sit deserunt.
          Laborum aliquip qui ex ullamco esse velit minim voluptate voluptate.
          Cillum non amet excepteur Lorem. Commodo culpa sunt consequat cillum
          ea in.
        </p>
      </div>
    );
  }
}

export default UserOutput;
