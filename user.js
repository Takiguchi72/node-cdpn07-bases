/**
 * Classe Utilisateur.
 * @returns
 */
function User() {
	this.name = undefined;
}

/**
 * Modifie le nom de l'utilisateur.
 * @param name Le nom de l'utilisateur.
 */
User.prototype.setName = function(name) {
	this.name = name;
}

/**
 * Retourne le nom de l'utilisateur.
 * @return Le nom de l'utilisateur.
 */
User.prototype.getName = function() {
	return this.name;
}

module.exports.User = User;