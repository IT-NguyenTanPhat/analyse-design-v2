const FIREBASE_DOMAIN =
	"https://analyse-design-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getAllDrugs() {
	const response = await fetch(`${FIREBASE_DOMAIN}/drugs.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch drugs.");
	}

	const transformedDrugs = [];

	for (const item in data) {
		const drug = {
			id: item,
			...data[item],
		};

		transformedDrugs.push(drug);
	}
    
	return transformedDrugs;
}

export async function getDrug(drugKey) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugKey}.json`
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch drug.");
	}

	const loadedDrug = {
		id: drugKey,
		...data,
	};

	return loadedDrug;
}

export async function addDrug(drugData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/drugs.json`, {
		method: "POST",
		body: JSON.stringify(drugData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not create drug.");
	}

	return null;
}

export async function updateDrug(drugData) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugData.id}.json`,
		{
			method: "PATCH",
			body: JSON.stringify(drugData),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not update drug.");
	}

	return null;
}

export async function deleteDrug(drugKey) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugKey}.json`,
		{
			method: "DELETE",
			body: JSON.stringify(drugKey),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not delete drug.");
	}

	return null;
}


export async function getAllOrders() {
	const response = await fetch(`${FIREBASE_DOMAIN}/orders.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch orders.");
	}

	const transformedOrders = [];

	for (const item in data) {
		const order = {
			id: item,
			...data[item],
		};

		transformedOrders.push(order);
	}
    
	return transformedOrders;
}

export async function getOrder(orderId) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/orders/${orderId}.json`
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch order.");
	}

	const loadedOrder = {
		id: orderId,
		...data,
	};

	return loadedOrder;
}

export async function addOrder(orderData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/orders.json`, {
		method: "POST",
		body: JSON.stringify(orderData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not create order.");
	}

	return null;
}

export async function updateOrder(orderData) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/orders/${orderData.id}.json`,
		{
			method: "PATCH",
			body: JSON.stringify(orderData),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not update order.");
	}

	return null;
}

export async function deleteOrder(orderId) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/orders/${orderId}.json`,
		{
			method: "DELETE",
			body: JSON.stringify(orderId),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not delete order.");
	}

	return null;
}
