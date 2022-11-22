import request from 'supertest'
import app from './routes/User.js'
import mongoose from 'mongoose'




describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).post("http://localhost:8000/User/add").send({
            "Name" : "zukhraf",
            "Email" : "zukhraf@gmail.com",
            "Age" : 19,
            "Contact" : 1235
        })
        expect(response.statusCode).toBe(200);







    })





})
describe("Test the root path",()=>{
    test("It should reponse the delete method",()=>{
        const response=request(app).delete("http://localhost:8000/User/:id").send({
           "Id":"6367eeca830c63dfb5c0af95"
        })
        expect(response.statusCode).toBe(200);
 })
})