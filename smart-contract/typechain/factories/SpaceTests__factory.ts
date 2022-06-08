/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SpaceTests, SpaceTestsInterface } from "../SpaceTests";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxMintAmountPerTx",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_hiddenMetadataUri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hiddenMetadataUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMintAmountPerTx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "mintForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
    ],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_hiddenMetadataUri",
        type: "string",
      },
    ],
    name: "setHiddenMetadataUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxMintAmountPerTx",
        type: "uint256",
      },
    ],
    name: "setMaxMintAmountPerTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setRevealed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uriPrefix",
        type: "string",
      },
    ],
    name: "setUriPrefix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uriSuffix",
        type: "string",
      },
    ],
    name: "setUriSuffix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setWhitelistMintEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uriPrefix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uriSuffix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "walletOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "whitelistMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistMintEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040819052600060808190526200001b91600c91620001c1565b5060408051808201909152600580825264173539b7b760d91b60209092019182526200004a91600d91620001c1565b506012805462ffffff191660011790553480156200006757600080fd5b5060405162002b1138038062002b118339810160408190526200008a9162000334565b855186908690620000a3906002906020850190620001c1565b508051620000b9906003906020840190620001c1565b5050600160005550620000cc33620000f7565b6001600955600f84905560108390556011829055620000eb8162000149565b5050505050506200041e565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6008546001600160a01b03163314620001a85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b8051620001bd90600e906020840190620001c1565b5050565b828054620001cf90620003e1565b90600052602060002090601f016020900481019282620001f357600085556200023e565b82601f106200020e57805160ff19168380011785556200023e565b828001600101855582156200023e579182015b828111156200023e57825182559160200191906001019062000221565b506200024c92915062000250565b5090565b5b808211156200024c576000815560010162000251565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028f57600080fd5b81516001600160401b0380821115620002ac57620002ac62000267565b604051601f8301601f19908116603f01168101908282118183101715620002d757620002d762000267565b81604052838152602092508683858801011115620002f457600080fd5b600091505b83821015620003185785820183015181830184015290820190620002f9565b838211156200032a5760008385830101525b9695505050505050565b60008060008060008060c087890312156200034e57600080fd5b86516001600160401b03808211156200036657600080fd5b620003748a838b016200027d565b975060208901519150808211156200038b57600080fd5b620003998a838b016200027d565b965060408901519550606089015194506080890151935060a0890151915080821115620003c557600080fd5b50620003d489828a016200027d565b9150509295509295509295565b600181811c90821680620003f657607f821691505b602082108114156200041857634e487b7160e01b600052602260045260246000fd5b50919050565b6126e3806200042e6000396000f3fe6080604052600436106102515760003560e01c806370a0823111610139578063b071401b116100b6578063d5abeb011161007a578063d5abeb011461069d578063db4bec44146106b3578063e0a80853146106e3578063e985e9c514610703578063efbd73f41461074c578063f2fde38b1461076c57600080fd5b8063b071401b1461060a578063b767a0981461062a578063b88d4fde1461064a578063c87b56dd1461066a578063d2cab0561461068a57600080fd5b806394354fd0116100fd57806394354fd01461059757806395d89b41146105ad578063a0712d68146105c2578063a22cb465146105d5578063a45ba8e7146105f557600080fd5b806370a0823114610504578063715018a6146105245780637cb64759146105395780637ec4a659146105595780638da5cb5b1461057957600080fd5b80633ccfd60b116101d2578063518302271161019657806351830227146104615780635503a0e8146104815780635c975abb1461049657806362b99ad4146104b05780636352211e146104c55780636caede3d146104e557600080fd5b80633ccfd60b146103bf57806342842e0e146103d4578063438b6300146103f457806344a0d68a146104215780634fdd43cb1461044157600080fd5b806316ba10e01161021957806316ba10e01461032b57806316c38b3c1461034b57806318160ddd1461036b57806323b872dd146103895780632eb4a7ab146103a957600080fd5b806301ffc9a71461025657806306fdde031461028b578063081812fc146102ad578063095ea7b3146102e557806313faede614610307575b600080fd5b34801561026257600080fd5b50610276610271366004611ff7565b61078c565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102a06107de565b604051610282919061206c565b3480156102b957600080fd5b506102cd6102c836600461207f565b610870565b6040516001600160a01b039091168152602001610282565b3480156102f157600080fd5b506103056103003660046120b4565b6108b4565b005b34801561031357600080fd5b5061031d600f5481565b604051908152602001610282565b34801561033757600080fd5b50610305610346366004612169565b610942565b34801561035757600080fd5b506103056103663660046121c1565b61098c565b34801561037757600080fd5b5061031d600154600054036000190190565b34801561039557600080fd5b506103056103a43660046121dc565b6109c9565b3480156103b557600080fd5b5061031d600a5481565b3480156103cb57600080fd5b506103056109d4565b3480156103e057600080fd5b506103056103ef3660046121dc565b610b4d565b34801561040057600080fd5b5061041461040f366004612218565b610b68565b6040516102829190612233565b34801561042d57600080fd5b5061030561043c36600461207f565b610caf565b34801561044d57600080fd5b5061030561045c366004612169565b610cde565b34801561046d57600080fd5b506012546102769062010000900460ff1681565b34801561048d57600080fd5b506102a0610d1b565b3480156104a257600080fd5b506012546102769060ff1681565b3480156104bc57600080fd5b506102a0610da9565b3480156104d157600080fd5b506102cd6104e036600461207f565b610db6565b3480156104f157600080fd5b5060125461027690610100900460ff1681565b34801561051057600080fd5b5061031d61051f366004612218565b610dc8565b34801561053057600080fd5b50610305610e16565b34801561054557600080fd5b5061030561055436600461207f565b610e4c565b34801561056557600080fd5b50610305610574366004612169565b610e7b565b34801561058557600080fd5b506008546001600160a01b03166102cd565b3480156105a357600080fd5b5061031d60115481565b3480156105b957600080fd5b506102a0610eb8565b6103056105d036600461207f565b610ec7565b3480156105e157600080fd5b506103056105f0366004612277565b610fe4565b34801561060157600080fd5b506102a061107a565b34801561061657600080fd5b5061030561062536600461207f565b611087565b34801561063657600080fd5b506103056106453660046121c1565b6110b6565b34801561065657600080fd5b506103056106653660046122aa565b6110fa565b34801561067657600080fd5b506102a061068536600461207f565b61114b565b610305610698366004612325565b6112bb565b3480156106a957600080fd5b5061031d60105481565b3480156106bf57600080fd5b506102766106ce366004612218565b600b6020526000908152604090205460ff1681565b3480156106ef57600080fd5b506103056106fe3660046121c1565b611520565b34801561070f57600080fd5b5061027661071e3660046123a3565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b34801561075857600080fd5b506103056107673660046123cd565b611566565b34801561077857600080fd5b50610305610787366004612218565b611606565b60006001600160e01b031982166380ac58cd60e01b14806107bd57506001600160e01b03198216635b5e139f60e01b145b806107d857506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600280546107ed906123f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610819906123f0565b80156108665780601f1061083b57610100808354040283529160200191610866565b820191906000526020600020905b81548152906001019060200180831161084957829003601f168201915b5050505050905090565b600061087b826116a1565b610898576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006108bf82610db6565b9050806001600160a01b0316836001600160a01b031614156108f45760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216148015906109145750610912813361071e565b155b15610932576040516367d9dca160e11b815260040160405180910390fd5b61093d8383836116da565b505050565b6008546001600160a01b031633146109755760405162461bcd60e51b815260040161096c9061242b565b60405180910390fd5b805161098890600d906020840190611f48565b5050565b6008546001600160a01b031633146109b65760405162461bcd60e51b815260040161096c9061242b565b6012805460ff1916911515919091179055565b61093d838383611736565b6008546001600160a01b031633146109fe5760405162461bcd60e51b815260040161096c9061242b565b60026009541415610a515760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161096c565b6002600955600073146fb9c3b2c13ba88c6945a759ebfa95127486f46064610a7a476005612476565b610a8491906124ab565b604051600081818185875af1925050503d8060008114610ac0576040519150601f19603f3d011682016040523d82523d6000602084013e610ac5565b606091505b5050905080610ad357600080fd5b6000610ae76008546001600160a01b031690565b6001600160a01b03164760405160006040518083038185875af1925050503d8060008114610b31576040519150601f19603f3d011682016040523d82523d6000602084013e610b36565b606091505b5050905080610b4457600080fd5b50506001600955565b61093d838383604051806020016040528060008152506110fa565b60606000610b7583610dc8565b90506000816001600160401b03811115610b9157610b916120de565b604051908082528060200260200182016040528015610bba578160200160208202803683370190505b50905060016000805b8482108015610bd457506010548311155b15610ca457600083815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff161580159282018390529091610c41575080516001600160a01b031615155b15610c4b57805191505b876001600160a01b0316826001600160a01b03161415610c915783858481518110610c7857610c786124bf565b602090810291909101015282610c8d816124d5565b9350505b83610c9b816124d5565b94505050610bc3565b509195945050505050565b6008546001600160a01b03163314610cd95760405162461bcd60e51b815260040161096c9061242b565b600f55565b6008546001600160a01b03163314610d085760405162461bcd60e51b815260040161096c9061242b565b805161098890600e906020840190611f48565b600d8054610d28906123f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d54906123f0565b8015610da15780601f10610d7657610100808354040283529160200191610da1565b820191906000526020600020905b815481529060010190602001808311610d8457829003601f168201915b505050505081565b600c8054610d28906123f0565b6000610dc18261194a565b5192915050565b60006001600160a01b038216610df1576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b6008546001600160a01b03163314610e405760405162461bcd60e51b815260040161096c9061242b565b610e4a6000611a71565b565b6008546001600160a01b03163314610e765760405162461bcd60e51b815260040161096c9061242b565b600a55565b6008546001600160a01b03163314610ea55760405162461bcd60e51b815260040161096c9061242b565b805161098890600c906020840190611f48565b6060600380546107ed906123f0565b80600081118015610eda57506011548111155b610ef65760405162461bcd60e51b815260040161096c906124f0565b60105481610f0b600154600054036000190190565b610f15919061251e565b1115610f335760405162461bcd60e51b815260040161096c90612536565b8180600f54610f429190612476565b341015610f875760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e742066756e64732160681b604482015260640161096c565b60125460ff1615610fda5760405162461bcd60e51b815260206004820152601760248201527f54686520636f6e74726163742069732070617573656421000000000000000000604482015260640161096c565b61093d3384611ac3565b6001600160a01b03821633141561100e5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600e8054610d28906123f0565b6008546001600160a01b031633146110b15760405162461bcd60e51b815260040161096c9061242b565b601155565b6008546001600160a01b031633146110e05760405162461bcd60e51b815260040161096c9061242b565b601280549115156101000261ff0019909216919091179055565b611105848484611736565b6001600160a01b0383163b15158015611127575061112584848484611add565b155b15611145576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b6060611156826116a1565b6111ba5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161096c565b60125462010000900460ff1661125c57600e80546111d7906123f0565b80601f0160208091040260200160405190810160405280929190818152602001828054611203906123f0565b80156112505780601f1061122557610100808354040283529160200191611250565b820191906000526020600020905b81548152906001019060200180831161123357829003601f168201915b50505050509050919050565b6000611266611bd5565b9050600081511161128657604051806020016040528060008152506112b4565b8061129084611be4565b600d6040516020016112a493929190612564565b6040516020818303038152906040525b9392505050565b826000811180156112ce57506011548111155b6112ea5760405162461bcd60e51b815260040161096c906124f0565b601054816112ff600154600054036000190190565b611309919061251e565b11156113275760405162461bcd60e51b815260040161096c90612536565b8380600f546113369190612476565b34101561137b5760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e742066756e64732160681b604482015260640161096c565b601254610100900460ff166113dd5760405162461bcd60e51b815260206004820152602260248201527f5468652077686974656c6973742073616c65206973206e6f7420656e61626c65604482015261642160f01b606482015260840161096c565b336000908152600b602052604090205460ff161561143d5760405162461bcd60e51b815260206004820152601860248201527f4164647265737320616c726561647920636c61696d6564210000000000000000604482015260640161096c565b6040516bffffffffffffffffffffffff193360601b1660208201526000906034016040516020818303038152906040528051906020012090506114b785858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600a549150849050611ce1565b6114f45760405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642070726f6f662160901b604482015260640161096c565b336000818152600b60205260409020805460ff191660011790556115189087611ac3565b505050505050565b6008546001600160a01b0316331461154a5760405162461bcd60e51b815260040161096c9061242b565b60128054911515620100000262ff000019909216919091179055565b8160008111801561157957506011548111155b6115955760405162461bcd60e51b815260040161096c906124f0565b601054816115aa600154600054036000190190565b6115b4919061251e565b11156115d25760405162461bcd60e51b815260040161096c90612536565b6008546001600160a01b031633146115fc5760405162461bcd60e51b815260040161096c9061242b565b61093d8284611ac3565b6008546001600160a01b031633146116305760405162461bcd60e51b815260040161096c9061242b565b6001600160a01b0381166116955760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161096c565b61169e81611a71565b50565b6000816001111580156116b5575060005482105b80156107d8575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006117418261194a565b80519091506000906001600160a01b0316336001600160a01b0316148061176f5750815161176f903361071e565b8061178a57503361177f84610870565b6001600160a01b0316145b9050806117aa57604051632ce44b5f60e11b815260040160405180910390fd5b846001600160a01b031682600001516001600160a01b0316146117df5760405162a1148160e81b815260040160405180910390fd5b6001600160a01b03841661180657604051633a954ecd60e21b815260040160405180910390fd5b61181660008484600001516116da565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b4290921691909102179092559086018083529120549091166119005760005481101561190057825160008281526004602090815260409091208054918601516001600160401b0316600160a01b026001600160e01b03199092166001600160a01b03909316929092171790555b5082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050505050565b6040805160608101825260008082526020820181905291810191909152818060011115801561197a575060005481105b15611a5857600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff16151591810182905290611a565780516001600160a01b0316156119ed579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff1615159281019290925215611a51579392505050565b6119ed565b505b604051636f96cda160e11b815260040160405180910390fd5b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610988828260405180602001604052806000815250611cf7565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611b12903390899088908890600401612628565b602060405180830381600087803b158015611b2c57600080fd5b505af1925050508015611b5c575060408051601f3d908101601f19168201909252611b5991810190612665565b60015b611bb7573d808015611b8a576040519150601f19603f3d011682016040523d82523d6000602084013e611b8f565b606091505b508051611baf576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b6060600c80546107ed906123f0565b606081611c085750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c325780611c1c816124d5565b9150611c2b9050600a836124ab565b9150611c0c565b6000816001600160401b03811115611c4c57611c4c6120de565b6040519080825280601f01601f191660200182016040528015611c76576020820181803683370190505b5090505b8415611bcd57611c8b600183612682565b9150611c98600a86612699565b611ca390603061251e565b60f81b818381518110611cb857611cb86124bf565b60200101906001600160f81b031916908160001a905350611cda600a866124ab565b9450611c7a565b600082611cee8584611d04565b14949350505050565b61093d8383836001611d78565b600081815b8451811015611d70576000858281518110611d2657611d266124bf565b60200260200101519050808311611d4c5760008381526020829052604090209250611d5d565b600081815260208490526040902092505b5080611d68816124d5565b915050611d09565b509392505050565b6000546001600160a01b038516611da157604051622e076360e81b815260040160405180910390fd5b83611dbf5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600490925290912080546001600160e01b031916909217600160a01b429092169190910217905580808501838015611e7057506001600160a01b0387163b15155b15611ef9575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4611ec16000888480600101955088611add565b611ede576040516368d2bf6b60e11b815260040160405180910390fd5b80821415611e76578260005414611ef457600080fd5b611f3f565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480821415611efa575b50600055611943565b828054611f54906123f0565b90600052602060002090601f016020900481019282611f765760008555611fbc565b82601f10611f8f57805160ff1916838001178555611fbc565b82800160010185558215611fbc579182015b82811115611fbc578251825591602001919060010190611fa1565b50611fc8929150611fcc565b5090565b5b80821115611fc85760008155600101611fcd565b6001600160e01b03198116811461169e57600080fd5b60006020828403121561200957600080fd5b81356112b481611fe1565b60005b8381101561202f578181015183820152602001612017565b838111156111455750506000910152565b60008151808452612058816020860160208601612014565b601f01601f19169290920160200192915050565b6020815260006112b46020830184612040565b60006020828403121561209157600080fd5b5035919050565b80356001600160a01b03811681146120af57600080fd5b919050565b600080604083850312156120c757600080fd5b6120d083612098565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b038084111561210e5761210e6120de565b604051601f8501601f19908116603f01168101908282118183101715612136576121366120de565b8160405280935085815286868601111561214f57600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561217b57600080fd5b81356001600160401b0381111561219157600080fd5b8201601f810184136121a257600080fd5b611bcd848235602084016120f4565b803580151581146120af57600080fd5b6000602082840312156121d357600080fd5b6112b4826121b1565b6000806000606084860312156121f157600080fd5b6121fa84612098565b925061220860208501612098565b9150604084013590509250925092565b60006020828403121561222a57600080fd5b6112b482612098565b6020808252825182820181905260009190848201906040850190845b8181101561226b5783518352928401929184019160010161224f565b50909695505050505050565b6000806040838503121561228a57600080fd5b61229383612098565b91506122a1602084016121b1565b90509250929050565b600080600080608085870312156122c057600080fd5b6122c985612098565b93506122d760208601612098565b92506040850135915060608501356001600160401b038111156122f957600080fd5b8501601f8101871361230a57600080fd5b612319878235602084016120f4565b91505092959194509250565b60008060006040848603121561233a57600080fd5b8335925060208401356001600160401b038082111561235857600080fd5b818601915086601f83011261236c57600080fd5b81358181111561237b57600080fd5b8760208260051b850101111561239057600080fd5b6020830194508093505050509250925092565b600080604083850312156123b657600080fd5b6123bf83612098565b91506122a160208401612098565b600080604083850312156123e057600080fd5b823591506122a160208401612098565b600181811c9082168061240457607f821691505b6020821081141561242557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561249057612490612460565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826124ba576124ba612495565b500490565b634e487b7160e01b600052603260045260246000fd5b60006000198214156124e9576124e9612460565b5060010190565b602080825260149082015273496e76616c6964206d696e7420616d6f756e742160601b604082015260600190565b6000821982111561253157612531612460565b500190565b6020808252601490820152734d617820737570706c792065786365656465642160601b604082015260600190565b6000845160206125778285838a01612014565b85519184019161258a8184848a01612014565b8554920191600090600181811c90808316806125a757607f831692505b8583108114156125c557634e487b7160e01b85526022600452602485fd5b8080156125d957600181146125ea57612617565b60ff19851688528388019550612617565b60008b81526020902060005b8581101561260f5781548a8201529084019088016125f6565b505083880195505b50939b9a5050505050505050505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061265b90830184612040565b9695505050505050565b60006020828403121561267757600080fd5b81516112b481611fe1565b60008282101561269457612694612460565b500390565b6000826126a8576126a8612495565b50069056fea2646970667358221220fae357312662910239bb67821d9cc1488ada627a6139c9ba896dbdc0d531b3e064736f6c63430008090033";

export class SpaceTests__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _tokenName: string,
    _tokenSymbol: string,
    _cost: BigNumberish,
    _maxSupply: BigNumberish,
    _maxMintAmountPerTx: BigNumberish,
    _hiddenMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SpaceTests> {
    return super.deploy(
      _tokenName,
      _tokenSymbol,
      _cost,
      _maxSupply,
      _maxMintAmountPerTx,
      _hiddenMetadataUri,
      overrides || {}
    ) as Promise<SpaceTests>;
  }
  getDeployTransaction(
    _tokenName: string,
    _tokenSymbol: string,
    _cost: BigNumberish,
    _maxSupply: BigNumberish,
    _maxMintAmountPerTx: BigNumberish,
    _hiddenMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenName,
      _tokenSymbol,
      _cost,
      _maxSupply,
      _maxMintAmountPerTx,
      _hiddenMetadataUri,
      overrides || {}
    );
  }
  attach(address: string): SpaceTests {
    return super.attach(address) as SpaceTests;
  }
  connect(signer: Signer): SpaceTests__factory {
    return super.connect(signer) as SpaceTests__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpaceTestsInterface {
    return new utils.Interface(_abi) as SpaceTestsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SpaceTests {
    return new Contract(address, _abi, signerOrProvider) as SpaceTests;
  }
}