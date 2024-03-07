Mongodb compass

#seleccionar una base de datos
use <base de datos> 
/////////////////////////////////////////////////

#insertar un usuario 
db.<coleccion>.<accion(insertOne)>
db.users.insertOne #ejemplo en una coleccion de la base de datos creada en clase
///////////////////////////////////////////////////

#ver contenido de una coleccion
db.<coleccion>.find()
db.users.find() #ejemplo en una coleccion de la base de datos creada en clase
/////////////////////////////////////////////////////////////////////

#actualizar un objeto
db.<coleccion>.updateOne({_id: ObjectId("<id del objeto a actualzar>)}, {$set: {<propiedad a actualizar>: "<valor a actualizar>"}})
db.users.updateOne({_id: ObjectId("65e8aafbde80316d39fb5a47")}, {$set: {password: "password"}}) #ejemplo en una coleccion de la base de datos creada en clase

#actualizar varios registros, filtrados por propiedad valor....
db.<coleccion.updateMany({<propiedad filtrado>: "<valor para filtrado"}, {$set: {<propiedad a modificar>: "<valor a modificar>"}})
db.users.updateMany({gender: "Male"}, {$set: {last_name: "Doe"}})

//?se pueden poner varios parametros para el filtrado ejemplo
db.users.updateMany({gender: "Male"}, {last_name: "Doe"}, {$set: {last_name: "Doe"}})
////////////////////////////////////////////////////

#borrar un registro
db.<coleccion>.deleteOne({_id: ObjectId("<id del objeto a borrar")})
db.users.deleteOne({_id: ObjectId("65e8aafbde80316d39fb5a47")}) 

# filtrado por query
db.<coleccion>.find({"<propiedad>": "<valor>"})
db.users.find({"last_name": 'Hilton'})

---------------------------------------------------------------------------------------------
INTERFAZ GRAFICA

En clase se vio la indexacion
Validaciones
Row queies
