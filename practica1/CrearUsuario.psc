Algoritmo CrearUsuario
	Definir NombreCompleto, Correo, Contraseña como cadenas
	
	Escribir "Porfavor ingrese su nombre completo"
	Leer NombreCompleto
	
	Escribir "Porfavor ingrese su Correo"
	Leer Correo
	
	//outlook
	//omail
	//oroton
	//mail
	
	Escribir "Porfavor ingrese su Contraseña"
	Leer Contraseña
	
	Si Longitud(Contraseña) < 8 Entonces
		Escribir "La contraseña debe ser mayor a 8 caracteres"
	SiNo
		Escribir "Usuario creado exitosamente"
		Escribir "Los datos del usuario son:"
		Escribir NombreCompleto
		Escribir Correo
		Escribir Contraseña
	FinSi
	
FinAlgoritmo
