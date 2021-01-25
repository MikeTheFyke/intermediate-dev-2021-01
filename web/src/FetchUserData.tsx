import React from 'react';

class FetchUserData extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }

  public componentDidMount() {
    this.setState({ userData: [] });
    this.getUsers();
  }

  public getUsers = () => {
    fetch('http://localhost:4000/repos')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userData: {
            repoName: full_name,
            repoDescription: description,
            repoLanguage: language,
            forkCount: forks,
          },
        });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  public render() {
    return <div className="fetchedUsers">Users</div>;
  }
}

export default FetchUserData;
