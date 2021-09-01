const { User } = require('../database/models');

exports.getAllUsers = () => User.findAll({
    include: ['books', 'addresses']
});

exports.addBooktoUser = async (id, book ) => {
    const user = await User.findByPk(id);

    const returnedBook = user.createBook(book);

    return returnedBook;
};

exports.addAddresstoUser = async (id, address ) => {
    const user = await User.findByPk(id);
    const returnedAddress = user.createAddress(address);

    return returnedAddress;
};