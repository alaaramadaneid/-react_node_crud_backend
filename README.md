    Importation des modules nécessaires :
        express : pour créer le serveur web.
        cors : pour gérer les requêtes CORS (Cross-Origin Resource Sharing).
        mysql : pour se connecter à la base de données MySQL.

    Configuration du serveur Express :
        Création d'une instance de l'application Express.
        Utilisation de middleware pour analyser les corps de requête au format JSON et pour gérer les requêtes CORS.

    Connexion à la base de données MySQL :
        Création d'une connexion à la base de données en utilisant les informations de connexion fournies (host, user, password, database).
        Affichage d'un message de réussite ou d'erreur de connexion.

    Définition des endpoints API :
        GET / : Renvoie tous les enregistrements de la table "student".
        POST /create : Crée un nouvel enregistrement "student" en utilisant les données fournies dans le corps de la requête.
        PUT /update/:id : Met à jour l'enregistrement "student" avec l'ID spécifié en utilisant les données fournies dans le corps de la requête.
        DELETE /student/:id : Supprime l'enregistrement "student" avec l'ID spécifié.

    Démarrage du serveur :
        Le serveur démarre en écoutant sur le port spécifié dans la variable d'environnement PORT ou sur le port 8001 par défaut.
        Affichage d'un message indiquant que le serveur a démarré et sur quel port il écoute.
