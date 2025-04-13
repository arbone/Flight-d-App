/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  TravelBooking,
  TravelBookingInterface,
} from "../../contracts/TravelBooking";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "travelId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "traveler",
        type: "address",
      },
    ],
    name: "BookingConfirmed",
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
        internalType: "uint256",
        name: "travelId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TravelCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_travelId",
        type: "uint256",
      },
    ],
    name: "bookTravel",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxParticipants",
        type: "uint256",
      },
    ],
    name: "createTravel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_travelId",
        type: "uint256",
      },
    ],
    name: "getTravel",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxParticipants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentParticipants",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserBookings",
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
    inputs: [],
    name: "renounceOwnership",
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
    name: "travelCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "travels",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxParticipants",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentParticipants",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userBookings",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555061003561002a61003a60201b60201c565b61004260201b60201c565b610108565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611793806101176000396000f3fe6080604052600436106100915760003560e01c8063c5de628611610059578063c5de62861461016f578063cebc046f146101b2578063d653d1fc146101dd578063e3a4d3a2146101f9578063f2fde38b1461023657610091565b80634c72c96d1461009657806363738555146100bf578063715018a6146101025780638da5cb5b1461011957806390d6348014610144575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610d48565b61025f565b005b3480156100cb57600080fd5b506100e660048036038101906100e19190610de7565b610386565b6040516100f99796959493929190610ebd565b60405180910390f35b34801561010e57600080fd5b506101176104e5565b005b34801561012557600080fd5b5061012e6104f9565b60405161013b9190610f7b565b60405180910390f35b34801561015057600080fd5b50610159610523565b6040516101669190610f96565b60405180910390f35b34801561017b57600080fd5b5061019660048036038101906101919190610de7565b610529565b6040516101a99796959493929190610ebd565b60405180910390f35b3480156101be57600080fd5b506101c76106fa565b6040516101d4919061106f565b60405180910390f35b6101f760048036038101906101f29190610de7565b61078f565b005b34801561020557600080fd5b50610220600480360381019061021b91906110bd565b61095f565b60405161022d9190610f96565b60405180910390f35b34801561024257600080fd5b5061025d600480360381019061025891906110fd565b610990565b005b610267610a13565b6004600081548092919061027a90611159565b91905055506040518060e00160405280600454815260200185815260200184815260200183815260200182815260200160008152602001600115158152506002600060045481526020019081526020016000206000820151816000015560208201518160010190816102ec91906113ad565b50604082015181600201908161030291906113ad565b50606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff0219169083151502179055509050506004547faf54deefa292b0bdd487bee5bf556091d1b480700386d6bf6bde0156d225d8cd858460405161037892919061147f565b60405180910390a250505050565b60026020528060005260406000206000915090508060000154908060010180546103af906111d0565b80601f01602080910402602001604051908101604052809291908181526020018280546103db906111d0565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b50505050509080600201805461043d906111d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610469906111d0565b80156104b65780601f1061048b576101008083540402835291602001916104b6565b820191906000526020600020905b81548152906001019060200180831161049957829003601f168201915b5050505050908060030154908060040154908060050154908060060160009054906101000a900460ff16905087565b6104ed610a13565b6104f76000610a91565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60045481565b60006060806000806000806000600260008a81526020019081526020016000206040518060e00160405290816000820154815260200160018201805461056e906111d0565b80601f016020809104026020016040519081016040528092919081815260200182805461059a906111d0565b80156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b50505050508152602001600282018054610600906111d0565b80601f016020809104026020016040519081016040528092919081815260200182805461062c906111d0565b80156106795780601f1061064e57610100808354040283529160200191610679565b820191906000526020600020905b81548152906001019060200180831161065c57829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509050806000015181602001518260400151836060015184608001518560a001518660c00151975097509750975097509750975050919395979092949650565b6060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561078557602002820191906000526020600020905b815481526020019060010190808311610771575b5050505050905090565b610797610b57565b60006002600083815260200190815260200160002090508060060160009054906101000a900460ff166107ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f6906114fb565b60405180910390fd5b8060040154816005015410610849576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084090611567565b60405180910390fd5b8060030154341461088f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610886906115d3565b60405180910390fd5b8060050160008154809291906108a490611159565b9190505550600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208290806001815401808255809150506001900390600052602060002001600090919091909150553373ffffffffffffffffffffffffffffffffffffffff16827f32a6eab1f4a0177609cc24472e391822aae8a497472601ef3f98523b4bc7bd3160405160405180910390a35061095c610ba6565b50565b6003602052816000526040600020818154811061097b57600080fd5b90600052602060002001600091509150505481565b610998610a13565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fe90611665565b60405180910390fd5b610a1081610a91565b50565b610a1b610bb0565b73ffffffffffffffffffffffffffffffffffffffff16610a396104f9565b73ffffffffffffffffffffffffffffffffffffffff1614610a8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a86906116d1565b60405180910390fd5b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600260005403610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b939061173d565b60405180910390fd5b6002600081905550565b6001600081905550565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c1f82610bd6565b810181811067ffffffffffffffff82111715610c3e57610c3d610be7565b5b80604052505050565b6000610c51610bb8565b9050610c5d8282610c16565b919050565b600067ffffffffffffffff821115610c7d57610c7c610be7565b5b610c8682610bd6565b9050602081019050919050565b82818337600083830152505050565b6000610cb5610cb084610c62565b610c47565b905082815260208101848484011115610cd157610cd0610bd1565b5b610cdc848285610c93565b509392505050565b600082601f830112610cf957610cf8610bcc565b5b8135610d09848260208601610ca2565b91505092915050565b6000819050919050565b610d2581610d12565b8114610d3057600080fd5b50565b600081359050610d4281610d1c565b92915050565b60008060008060808587031215610d6257610d61610bc2565b5b600085013567ffffffffffffffff811115610d8057610d7f610bc7565b5b610d8c87828801610ce4565b945050602085013567ffffffffffffffff811115610dad57610dac610bc7565b5b610db987828801610ce4565b9350506040610dca87828801610d33565b9250506060610ddb87828801610d33565b91505092959194509250565b600060208284031215610dfd57610dfc610bc2565b5b6000610e0b84828501610d33565b91505092915050565b610e1d81610d12565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e5d578082015181840152602081019050610e42565b60008484015250505050565b6000610e7482610e23565b610e7e8185610e2e565b9350610e8e818560208601610e3f565b610e9781610bd6565b840191505092915050565b60008115159050919050565b610eb781610ea2565b82525050565b600060e082019050610ed2600083018a610e14565b8181036020830152610ee48189610e69565b90508181036040830152610ef88188610e69565b9050610f076060830187610e14565b610f146080830186610e14565b610f2160a0830185610e14565b610f2e60c0830184610eae565b98975050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6582610f3a565b9050919050565b610f7581610f5a565b82525050565b6000602082019050610f906000830184610f6c565b92915050565b6000602082019050610fab6000830184610e14565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610fe681610d12565b82525050565b6000610ff88383610fdd565b60208301905092915050565b6000602082019050919050565b600061101c82610fb1565b6110268185610fbc565b935061103183610fcd565b8060005b838110156110625781516110498882610fec565b975061105483611004565b925050600181019050611035565b5085935050505092915050565b600060208201905081810360008301526110898184611011565b905092915050565b61109a81610f5a565b81146110a557600080fd5b50565b6000813590506110b781611091565b92915050565b600080604083850312156110d4576110d3610bc2565b5b60006110e2858286016110a8565b92505060206110f385828601610d33565b9150509250929050565b60006020828403121561111357611112610bc2565b5b6000611121848285016110a8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061116482610d12565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111965761119561112a565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111e857607f821691505b6020821081036111fb576111fa6111a1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026112637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611226565b61126d8683611226565b95508019841693508086168417925050509392505050565b6000819050919050565b60006112aa6112a56112a084610d12565b611285565b610d12565b9050919050565b6000819050919050565b6112c48361128f565b6112d86112d0826112b1565b848454611233565b825550505050565b600090565b6112ed6112e0565b6112f88184846112bb565b505050565b5b8181101561131c576113116000826112e5565b6001810190506112fe565b5050565b601f8211156113615761133281611201565b61133b84611216565b8101602085101561134a578190505b61135e61135685611216565b8301826112fd565b50505b505050565b600082821c905092915050565b600061138460001984600802611366565b1980831691505092915050565b600061139d8383611373565b9150826002028217905092915050565b6113b682610e23565b67ffffffffffffffff8111156113cf576113ce610be7565b5b6113d982546111d0565b6113e4828285611320565b600060209050601f8311600181146114175760008415611405578287015190505b61140f8582611391565b865550611477565b601f19841661142586611201565b60005b8281101561144d57848901518255600182019150602085019450602081019050611428565b8683101561146a5784890151611466601f891682611373565b8355505b6001600288020188555050505b505050505050565b600060408201905081810360008301526114998185610e69565b90506114a86020830184610e14565b9392505050565b7f54726176656c206973206e6f7420616374697665000000000000000000000000600082015250565b60006114e5601483610e2e565b91506114f0826114af565b602082019050919050565b60006020820190508181036000830152611514816114d8565b9050919050565b7f54726176656c2069732066756c6c000000000000000000000000000000000000600082015250565b6000611551600e83610e2e565b915061155c8261151b565b602082019050919050565b6000602082019050818103600083015261158081611544565b9050919050565b7f496e636f7272656374207061796d656e7420616d6f756e740000000000000000600082015250565b60006115bd601883610e2e565b91506115c882611587565b602082019050919050565b600060208201905081810360008301526115ec816115b0565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061164f602683610e2e565b915061165a826115f3565b604082019050919050565b6000602082019050818103600083015261167e81611642565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006116bb602083610e2e565b91506116c682611685565b602082019050919050565b600060208201905081810360008301526116ea816116ae565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611727601f83610e2e565b9150611732826116f1565b602082019050919050565b600060208201905081810360008301526117568161171a565b905091905056fea2646970667358221220c7f267846debe48986d0703334788464d9cbb3ae474bb7687659b86998f3984164736f6c63430008130033";

type TravelBookingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TravelBookingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TravelBooking__factory extends ContractFactory {
  constructor(...args: TravelBookingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TravelBooking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TravelBooking__factory {
    return super.connect(runner) as TravelBooking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TravelBookingInterface {
    return new Interface(_abi) as TravelBookingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TravelBooking {
    return new Contract(address, _abi, runner) as unknown as TravelBooking;
  }
}
