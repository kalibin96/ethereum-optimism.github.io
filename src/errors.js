class ErrInvalidDataJson extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidDataJson";
  }
}

class ErrInvalidLogoFile extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidLogoFile";
  }
}

class ErrWebsiteLoadFailed extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrWebsiteLoadFailed";
  }
}

class ErrNoTokenCode extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrNoTokenCode";
  }
}

class ErrInvalidTokenDecimals extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidTokenDecimals";
  }
}

class ErrInvalidTokenSymbol extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidTokenSymbol";
  }
}

class ErrInvalidTokenName extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidTokenName";
  }
}

class ErrInvalidTokenList extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrInvalidTokenList";
  }
}

module.exports = {
  ErrInvalidDataJson,
  ErrInvalidLogoFile,
  ErrWebsiteLoadFailed,
  ErrNoTokenCode,
  ErrInvalidTokenDecimals,
  ErrInvalidTokenSymbol,
  ErrInvalidTokenName,
  ErrInvalidTokenList,
};