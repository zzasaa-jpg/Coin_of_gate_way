require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = process.env.port
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
	windowMs: process.env._32423344 * process.env._90838579 * process.env._08923456,
	max: process.env.max_, // max requests per IP
	message: {
		status: 429,
		message: "Too many requests from this IP, please try again later."
	}
});

const corsOptions = {
	origin: process.env.url.split(','),
	methods: process.env.methods.split(','),
	allowedHeaders: process.env.allowedHeaders.split(',')
}

app.use(cors(corsOptions))
app.use(process.env.endpoint, apiLimiter)
app.use(express.json({ limit: process.env.limit_ }));
app.use(express.urlencoded({ extended: true, limit: process.env.limit_ }));

//---------------post images------------------------
app.post(`${process.env.endpoint}/post_image__`, async (req, res) => {
	try {
		const key = req.headers['x-api-key'];
		if (!key || key !== process.env.key_) {
			return res.status(401).json({ message: "Invalid credentials!" })
		}

		const { coin_of, img_url, date } = req.body;
		const response = await axios.post(process.env._92124078,
			{ coin_of, img_url, date },
			{
				headers: {
					"Content-Type": "application/json",
					"x-api-key": key
				}
			});
		res.status(response.status).json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error posting from localhost: 2000", error: error.message });
	}
})
//-------------end of post image-------------------

//-------------get all documents-------------------
app.get(`${process.env.endpoint}/get_all_documents_`, async (req, res) => {
	try {
		const key = req.headers['x-api-key'];
		if (!key || key !== process.env.key_) {
			return res.status(401).json({ message: "Invalid credentials!" })
		}
		const response = await axios.get(process.env._00014343,
			{
				headers: {
					"Content-Type": "application/json",
					"x-api-key": key
				}
			});
		res.status(response.status).json(response.data);

	} catch (error) {
		console.error(error);
		if (error.response) {
			res.status(error.response.status).json(error.response.data)
		} else{
			res.status(500).json({ message: "Error posting from localhost: 2000", error: error.message });
		}
	}
})
//------------end of get all documents------------

//----------------not found route-----------------
app.get('/:universalURL', async (req, res) => {
	try {
		const { universalURL } = req.params;
		const response = await axios.get(`${process.env._03445654}${universalURL}`,
			{
				headers: { "Content-Type": "application/json" }
			});
		res.status(response.status).json(response.data);
	} catch (error) {
		console.error(error);
		if (error.response) {
			res.status(error.response.status).json(error.response.data)
		} else {
			res.status(500).json({ message: "Internal error calling backend!", error: error.message });
		}
	}
})
//------------------------------------------------

//----------------get image array-----------------
app.get(`${process.env.endpoint}/image_array__/:id`, async (req, res) => {
	try {
		const key = req.headers['x-api-key'];
		if (!key || key !== process.env.key_) {
			return res.status(401).json({ message: "Invalid credentials!" })
		}
		const { id } = req.params;
		const response = await axios.get(`${process.env._56452429}${id}`,
			{
				headers: {
					"Content-Type": "application/json",
					"x-api-key": key
				}
			});
		res.status(response.status).json(response.data);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error posting from localhost: 2000", error: error.message });
	}
})
//--------------end of get image array------------

//--------------update the document----------------
app.put(`${process.env.endpoint}/update_document__/:id`, async (req, res) => {
	try {
		const key = req.headers['x-api-key'];
		if (!key || key !== process.env.key_) {
			return res.status(401).json({ message: "Invalid credentials!" })
		}
		const { id } = req.params;
		const { coin_of, img_url } = req.body;
		const response = await axios.put(`${process.env._24256857}${id}`,
			{ coin_of, img_url },
			{
				headers: {
					"Content-Type": "application/json",
					"x-api-key": key
				}
			});
		res.status(response.status).json(response.data);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error in puting document!", error: error.message });
	}
})
//-----------end of update the document-----------

//--------------delete the document---------------
app.delete(`${process.env.endpoint}/delete_document__`, async (req, res) => {
	try {
		const key = req.headers['x-api-key'];
		if (!key || key !== process.env.key_) {
			return res.status(401).json({ message: "Invalid credentials!" })
		}
		const { ids } = req.body;
		const response = await axios.delete(process.env._77746352, {
			data: { ids },
			headers: {
				"Content-Type": "application/json",
				"x-api-key": key
			}
		});
		res.status(response.status).json(response.data);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error in puting document!", error: error.message });
	}
})
//-----------end of delete the document----------


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
