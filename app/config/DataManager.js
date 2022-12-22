export default class DataManager {
  static myInstance = null;
  userID = "";

  memories = [
    {
      userid: "user1",
      memid: 1,
      title: "Out on the track",
      subtitle: "October 22nd, 2020",
      image: require("../assets/six-foot-track.jpeg"),
      category: "Adventure",
      content: "I can feel the nature around me",
    },
    {
      userid: "user1",
      memid: 2,
      title: "First time driving a car",
      subtitle: "October 1st, 2018",
      image: require("../assets/driving.webp"),
      category: "Event",
      content: "Feel so great behind the wheels",
    },
    {
      userid: "user2",
      memid: 1,
      title: "Scuba diving",
      subtitle: "18th of March, 2020",
      image: require("../assets/scuba-diving.jpeg"),
      category: "Adventure",
      content: "The ocean is so surreal ",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getMems(id) {
    return this.memories.filter((mem) => mem.userid === id);
  }

  addMems(mem) {
    this.memories.push(mem);
  }

  handleDelete(mem1, id) {
    let mem2 = this.memories.filter((mem) => mem.userid === id);
    return mem2.filter((mem) => mem.memid !== mem1.memid);
  }
}
