Now let's start both the backend and frontend servers to test the CORS functionality. I'll start them in separate terminals:Let's start the frontend server as well:Both servers are now running:
- Backend: http://localhost:3000
- Frontend: http://localhost:5173

You can now test the CORS functionality by:
1. Opening http://localhost:5173 in your browser
2. Clicking the "Test CORS POST Request" button

The setup will help you observe:
- CORS headers in the Network tab of browser DevTools
- Successful responses when CORS is properly configured
- CORS errors if they occur

You can test different CORS scenarios by:
1. Modifying the allowed origins in the backend (main.ts)
2. Changing the credentials settings
3. Checking browser console for any CORS-related errors
