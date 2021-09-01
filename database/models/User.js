
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( 'User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
    
            },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
    
            },
        email: {
            type: DataTypes.STRING,
            allowNull: false
    
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false
    
            }
        
    });

    User.associate = models => {
        User.belongsToMany(models.Book, {
            through: 'user_books',
            as: 'books'
        });
        User.hasMany(models.Address, {
            foreignKey: 'user_id',
            as: 'addresses'
        });

    }

    return User;
};