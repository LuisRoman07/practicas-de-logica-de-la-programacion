Algoritmo CrearUsuario
	Definir NombreCompleto, Correo, Contrase�a como cadenas
	
	Escribir "Porfavor ingrese su nombre completo"
	Leer NombreCompleto
	
	Escribir "Porfavor ingrese su Correo"
	Leer Correo
	
	//outlook
	//omail
	//oroton
	//mail
	
	Escribir "Porfavor ingrese su Contrase�a"
	Leer Contrase�a
	
	Si Longitud(Contrase�a) < 8 Entonces
		Escribir "La contrase�a debe ser mayor a 8 caracteres"
	SiNo
		Escribir "Usuario creado exitosamente"
		Escribir "Los datos del usuario son:"
		Escribir NombreCompleto
		Escribir Correo
		Escribir Contrase�a
	FinSi
	
FinAlgoritmo
