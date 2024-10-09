# nd-front

**nd-front is the TypeScript (React) application by José Vicente del Valle Fayos to create a minimalist, functional, and secure journal for publishing your content**. This application is designed to work in combination with its counterpart, **nd-back**.

Version 7 **includes**:

- Markdown
- On-demand loading
- Form submission protected by dynamic timeout on both client and server sides
- Authentication via JSON Web Tokens
- Colour themes
- Voice reading
- Instant search
- Visit counter
- Comments
- Navigation without page reload

This version **does not include**:

- Multimedia content publishing
- Indexing capability (the applications do not index)

For the application to function correctly, the following **environment variables** need to be defined:

- REACT_APP_BASE_URL: Contains a String that stores the absolute URL of the API.
- REACT_APP_ENTRADAS_POR_PAGINA: Stores the number of entries that load each time the user requests a new load in a String.
- REACT_APP_CORREO_DESTINO: Stores a String with the email address used as an alternative to the contact form.
- REACT_APP_CORREO_TIMEOUT: Stores the maximum time between submissions for the contact form in a String.
- REACT_APP_CORREO_MAX_ENVIOS: Stores the maximum number of submissions allowed in the contact form in a String.
- REACT_APP_DOMINIO_PERMITIDO: Stores the domain name from which the application can be accessed.
