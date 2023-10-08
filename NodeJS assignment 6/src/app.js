const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blog = require('./models/Blog'); // Import the Blog model

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoints
app.get('/blog', async (req, res) => {
    try {
        const { page, search } = req.query;
        const perPage = 5;
        const skip = (page - 1) * perPage;
        const query = {};

        if (search) {
            query.topic = { $regex: search, $options: 'i' };
        }

        const blogs = await Blog.find(query)
            .skip(skip)
            .limit(perPage)
            .sort({ posted_at: -1 });

        res.json({
            status: 'success',
            result: blogs,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching blogs.',
        });
    }
});

app.post('/blog', async (req, res) => {
    try {
        const { topic, description, posted_by } = req.body;
        const newBlog = new Blog({ topic, description, posted_by });
        const savedBlog = await newBlog.save();

        res.status(201).json({
            status: 'success',
            result: savedBlog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while creating a blog.',
        });
    }
});

app.put('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { topic, description, posted_by } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            topic,
            description,
            posted_by,
        }, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found.',
            });
        }

        res.json({
            status: 'success',
            result: updatedBlog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while updating the blog.',
        });
    }
});

app.delete('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found.',
            });
        }

        res.json({
            status: 'success',
            result: deletedBlog,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while deleting the blog.',
        });
    }
});

module.exports = app;

