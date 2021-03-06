const express = require('express');
const {
	login,
	logout,
	signup,
	request,
	ticket,
	getRequests,
	getUserRequests,
	getUserAssignedRequests,
	getCompleteRequests,
	getPendingRequests,
	getRejectedRequests,
	cancelRequest,
	getDataReqCount,
	getSoftwareReqCount,
	getHardwareReqCount,
	getNetworkReqCount,
	getOtherReqCount,
	getPendingReqCount,
	getCompleteReqCount,
	getRejectedReqCount,
	getReqCount,
	getApproveReqCount,
} = require('../controllers/Users');
const {
	checkJwt,
	attachUser,
	requireAuthenticated,
} = require('./../middlewares');
const router = express.Router();

router.get(
	'/requests',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getRequests
);
router.get(
	'/requests/count',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getReqCount
);
router.get(
	'/requests/count/approve',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getApproveReqCount
);
router.get(
	'/user-requests',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getUserRequests
);
router.get(
	'/requests/assigned',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getUserAssignedRequests
);
router.get(
	'/requests/completed',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getCompleteRequests
);
router.get(
	'/requests/pending',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getPendingRequests
);

router.get(
	'/requests/count/pending',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getPendingReqCount
);
router.get(
	'/requests/count/complete',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getCompleteReqCount
);
router.get(
	'/requests/rejected',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getRejectedRequests
);
router.get(
	'/requests/count/rejected/',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getRejectedReqCount
);
router.get(
	'/requests/count/data',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getDataReqCount
);
router.get(
	'/requests/count/software',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getSoftwareReqCount
);
router.get(
	'/requests/count/hardware',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getHardwareReqCount
);
router.get(
	'/requests/count/network',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getNetworkReqCount
);
router.get(
	'/requests/count/other',
	attachUser,
	checkJwt,
	requireAuthenticated,
	getOtherReqCount
);
router.post('/login', login);
router.post('/signup', signup);
router.post('/request', attachUser, checkJwt, requireAuthenticated, request);
router.patch(
	'/request/:id',
	attachUser,
	checkJwt,
	requireAuthenticated,
	ticket
);
router.delete(
	'/request/:id',
	attachUser,
	checkJwt,
	requireAuthenticated,
	cancelRequest
);
router.get('/logout', logout);

module.exports = router;
