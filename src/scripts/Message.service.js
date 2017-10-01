'use strict';
angular
    .module( "resumeApp" )
    .factory( 'MessageService', [ '$http', function ( $http ) {
        
        return {
            sendMessage: function ( name, email, message ) {
                return $http( {
                    method: 'POST',
                    url: 'contact-form.php',
                    data: { 'name': name, 'email': email, 'message': message },
                    async: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } );
            }
        }
    } ] );