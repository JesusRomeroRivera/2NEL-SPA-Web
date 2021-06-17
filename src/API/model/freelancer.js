export default class Freelancer {
  constructor(
    userId,
    imageUrl,
    membershipType,
    firstName,
    lastName,
    portfolio,
    speciality
  ) {
    this.id = userId;
    this.imageUrl = imageUrl;
    this.membershipType = membershipType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.portfolio = portfolio;
    this.speciality = speciality;
  }

  loadFromParsedJson(object) {
    this.id = object.userId;
    this.imageUrl = object.imageUrl;
    this.membershipType = object.membershipType;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.portfolio = object.portfolio;
    this.speciality = object.speciality;
  }

  loadFromJson(json) {
    var parsedTienda = JSON.parse(json);
    this.loadFromParsedJson(parsedTienda);
  }

  stringify() {
    return JSON.stringify(this);
  }
}
