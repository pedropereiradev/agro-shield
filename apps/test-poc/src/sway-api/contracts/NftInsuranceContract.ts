/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.100.1
  Forc version: 0.67.0
  Fuel-Core version: 0.41.9
*/

import { Contract as __Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  Address,
  BigNumberish,
  BN,
  Bytes,
  FunctionFragment,
  InvokeFunction,
  StdString,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum AccessErrorInput { NotOwner = 'NotOwner' };
export enum AccessErrorOutput { NotOwner = 'NotOwner' };
export enum BurnErrorInput { NotEnoughCoins = 'NotEnoughCoins', ZeroAmount = 'ZeroAmount' };
export enum BurnErrorOutput { NotEnoughCoins = 'NotEnoughCoins', ZeroAmount = 'ZeroAmount' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum InitializationErrorInput { CannotReinitialized = 'CannotReinitialized' };
export enum InitializationErrorOutput { CannotReinitialized = 'CannotReinitialized' };
export type MetadataInput = Enum<{ B256: string, Bytes: Bytes, Int: BigNumberish, String: StdString }>;
export type MetadataOutput = Enum<{ B256: string, Bytes: Bytes, Int: BN, String: StdString }>;
export enum MintErrorInput { CannotMintMoreThanOneNFTWithSubId = 'CannotMintMoreThanOneNFTWithSubId', MaxNFTsMinted = 'MaxNFTsMinted', NFTAlreadyMinted = 'NFTAlreadyMinted' };
export enum MintErrorOutput { CannotMintMoreThanOneNFTWithSubId = 'CannotMintMoreThanOneNFTWithSubId', MaxNFTsMinted = 'MaxNFTsMinted', NFTAlreadyMinted = 'NFTAlreadyMinted' };
export enum MintErrorInput { ZeroAmount = 'ZeroAmount' };
export enum MintErrorOutput { ZeroAmount = 'ZeroAmount' };
export enum PauseErrorInput { Paused = 'Paused', NotPaused = 'NotPaused' };
export enum PauseErrorOutput { Paused = 'Paused', NotPaused = 'NotPaused' };
export enum SetErrorInput { ValueAlreadySet = 'ValueAlreadySet' };
export enum SetErrorOutput { ValueAlreadySet = 'ValueAlreadySet' };
export enum SetMetadataErrorInput { EmptyString = 'EmptyString', EmptyBytes = 'EmptyBytes' };
export enum SetMetadataErrorOutput { EmptyString = 'EmptyString', EmptyBytes = 'EmptyBytes' };
export type StateInput = Enum<{ Uninitialized: undefined, Initialized: IdentityInput, Revoked: undefined }>;
export type StateOutput = Enum<{ Uninitialized: void, Initialized: IdentityOutput, Revoked: void }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type SetMetadataEventInput = { asset: AssetIdInput, metadata: Option<MetadataInput>, key: StdString, sender: IdentityInput };
export type SetMetadataEventOutput = { asset: AssetIdOutput, metadata: Option<MetadataOutput>, key: StdString, sender: IdentityOutput };
export type SetNameEventInput = { asset: AssetIdInput, name: Option<StdString>, sender: IdentityInput };
export type SetNameEventOutput = { asset: AssetIdOutput, name: Option<StdString>, sender: IdentityOutput };
export type SetSymbolEventInput = { asset: AssetIdInput, symbol: Option<StdString>, sender: IdentityInput };
export type SetSymbolEventOutput = { asset: AssetIdOutput, symbol: Option<StdString>, sender: IdentityOutput };
export type TotalSupplyEventInput = { asset: AssetIdInput, supply: BigNumberish, sender: IdentityInput };
export type TotalSupplyEventOutput = { asset: AssetIdOutput, supply: BN, sender: IdentityOutput };

export type NftInsuranceContractConfigurables = Partial<{
  MAX_SUPPLY: BigNumberish;
}>;

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "b256",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum errors::MintError",
      "concreteTypeId": "ee89c439b5472cab716006d7c677d16e15301e6c82cfce12cebfa57919f537de",
      "metadataTypeId": 0
    },
    {
      "type": "enum errors::SetError",
      "concreteTypeId": "bf6597cf3d56a5e47a920520e275ccd481a27e7c988ea6af6f253170d5374c5a",
      "metadataTypeId": 1
    },
    {
      "type": "enum standards::src5::AccessError",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d",
      "metadataTypeId": 2
    },
    {
      "type": "enum standards::src5::State",
      "concreteTypeId": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "metadataTypeId": 3
    },
    {
      "type": "enum standards::src7::Metadata",
      "concreteTypeId": "f44b531974c6c04e17e66ab54e9868d230b9a24b3710b184399c363f0190180d",
      "metadataTypeId": 4
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 5
    },
    {
      "type": "enum std::option::Option<b256>",
      "concreteTypeId": "0c2beb9013490c4f753f2757dfe2d8340b22ce3827d596d81d249b7038033cb6",
      "metadataTypeId": 6,
      "typeArguments": [
        "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
      ]
    },
    {
      "type": "enum std::option::Option<enum standards::src7::Metadata>",
      "concreteTypeId": "fe93748eeb5d91a422fcea06e1b374216ad4ac0b2db01be0a6316af7f90dfa4f",
      "metadataTypeId": 6,
      "typeArguments": [
        "f44b531974c6c04e17e66ab54e9868d230b9a24b3710b184399c363f0190180d"
      ]
    },
    {
      "type": "enum std::option::Option<struct std::string::String>",
      "concreteTypeId": "7c06d929390a9aeeb8ffccf8173ac0d101a9976d99dda01cce74541a81e75ac0",
      "metadataTypeId": 6,
      "typeArguments": [
        "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
      ]
    },
    {
      "type": "enum std::option::Option<u64>",
      "concreteTypeId": "d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d",
      "metadataTypeId": 6,
      "typeArguments": [
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
      ]
    },
    {
      "type": "enum std::option::Option<u8>",
      "concreteTypeId": "2da102c46c7263beeed95818cd7bee801716ba8303dddafdcd0f6c9efda4a0f1",
      "metadataTypeId": 6,
      "typeArguments": [
        "c89951a24c6ca28c13fd1cfdc646b2b656d69e61a92b91023be7eb58eb914b6b"
      ]
    },
    {
      "type": "enum sway_libs::asset::errors::BurnError",
      "concreteTypeId": "3acdc2adac8e0589c5864525e0edc9dc61a9571a4d09c3c57b58ea76d33f4b46",
      "metadataTypeId": 7
    },
    {
      "type": "enum sway_libs::asset::errors::MintError",
      "concreteTypeId": "dff9dfec998a49b40f1c4b09567400f0e712aaf939c08f7d07bc5c63116e1084",
      "metadataTypeId": 8
    },
    {
      "type": "enum sway_libs::asset::errors::SetMetadataError",
      "concreteTypeId": "c6c09c148c1a1341c7ab81697b3545cc695fa67668a169cddc59790a9a0b6b44",
      "metadataTypeId": 9
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893",
      "metadataTypeId": 10
    },
    {
      "type": "enum sway_libs::pausable::errors::PauseError",
      "concreteTypeId": "8b3afcadf894415a10b09fc3717487e33802c8ffbb030edafe84ca4a71b280bc",
      "metadataTypeId": 11
    },
    {
      "type": "struct standards::src20::SetNameEvent",
      "concreteTypeId": "6ce295b0fb4c1c15e8ed1cfa4babda47d8a04940a5266a3229e12243a2e37c2c",
      "metadataTypeId": 14
    },
    {
      "type": "struct standards::src20::SetSymbolEvent",
      "concreteTypeId": "a8a4b78066c51a50da6349bd395fe1c67e774d75c1db2c5c22288a432d7a363d",
      "metadataTypeId": 15
    },
    {
      "type": "struct standards::src20::TotalSupplyEvent",
      "concreteTypeId": "f255d5cc2114d1b6bc34bef4c28d4b60caccffd9a672ed16b79ea217e1c4a8a3",
      "metadataTypeId": 16
    },
    {
      "type": "struct standards::src7::SetMetadataEvent",
      "concreteTypeId": "f1b1cc90b68559aa4bb5cc58201ebb5c5402ed3aa28927140761e8ff7dcd3ab8",
      "metadataTypeId": 17
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 19
    },
    {
      "type": "struct std::string::String",
      "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c",
      "metadataTypeId": 23
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5",
      "metadataTypeId": 24
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
      "type": "u8",
      "concreteTypeId": "c89951a24c6ca28c13fd1cfdc646b2b656d69e61a92b91023be7eb58eb914b6b"
    }
  ],
  "metadataTypes": [
    {
      "type": "enum errors::MintError",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "CannotMintMoreThanOneNFTWithSubId",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "MaxNFTsMinted",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NFTAlreadyMinted",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum errors::SetError",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "ValueAlreadySet",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::AccessError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "NotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::State",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Uninitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Initialized",
          "typeId": 5
        },
        {
          "name": "Revoked",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src7::Metadata",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "B256",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "Bytes",
          "typeId": 20
        },
        {
          "name": "Int",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "String",
          "typeId": 23
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "Address",
          "typeId": 18
        },
        {
          "name": "ContractId",
          "typeId": 22
        }
      ]
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 12
        }
      ],
      "typeParameters": [
        12
      ]
    },
    {
      "type": "enum sway_libs::asset::errors::BurnError",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "NotEnoughCoins",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ZeroAmount",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum sway_libs::asset::errors::MintError",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "ZeroAmount",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum sway_libs::asset::errors::SetMetadataError",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "EmptyString",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "EmptyBytes",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "CannotReinitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum sway_libs::pausable::errors::PauseError",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "Paused",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NotPaused",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 12
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 13
    },
    {
      "type": "struct standards::src20::SetNameEvent",
      "metadataTypeId": 14,
      "components": [
        {
          "name": "asset",
          "typeId": 19
        },
        {
          "name": "name",
          "typeId": 6,
          "typeArguments": [
            {
              "name": "",
              "typeId": 23
            }
          ]
        },
        {
          "name": "sender",
          "typeId": 5
        }
      ]
    },
    {
      "type": "struct standards::src20::SetSymbolEvent",
      "metadataTypeId": 15,
      "components": [
        {
          "name": "asset",
          "typeId": 19
        },
        {
          "name": "symbol",
          "typeId": 6,
          "typeArguments": [
            {
              "name": "",
              "typeId": 23
            }
          ]
        },
        {
          "name": "sender",
          "typeId": 5
        }
      ]
    },
    {
      "type": "struct standards::src20::TotalSupplyEvent",
      "metadataTypeId": 16,
      "components": [
        {
          "name": "asset",
          "typeId": 19
        },
        {
          "name": "supply",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "sender",
          "typeId": 5
        }
      ]
    },
    {
      "type": "struct standards::src7::SetMetadataEvent",
      "metadataTypeId": 17,
      "components": [
        {
          "name": "asset",
          "typeId": 19
        },
        {
          "name": "metadata",
          "typeId": 6,
          "typeArguments": [
            {
              "name": "",
              "typeId": 4
            }
          ]
        },
        {
          "name": "key",
          "typeId": 23
        },
        {
          "name": "sender",
          "typeId": 5
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 18,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 19,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::bytes::Bytes",
      "metadataTypeId": 20,
      "components": [
        {
          "name": "buf",
          "typeId": 21
        },
        {
          "name": "len",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::bytes::RawBytes",
      "metadataTypeId": 21,
      "components": [
        {
          "name": "ptr",
          "typeId": 13
        },
        {
          "name": "cap",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 22,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::string::String",
      "metadataTypeId": 23,
      "components": [
        {
          "name": "bytes",
          "typeId": 20
        }
      ]
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "metadataTypeId": 24,
      "components": [
        {
          "name": "new_owner",
          "typeId": 5
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "_asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "decimals",
      "output": "2da102c46c7263beeed95818cd7bee801716ba8303dddafdcd0f6c9efda4a0f1",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "name",
      "output": "7c06d929390a9aeeb8ffccf8173ac0d101a9976d99dda01cce74541a81e75ac0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "symbol",
      "output": "7c06d929390a9aeeb8ffccf8173ac0d101a9976d99dda01cce74541a81e75ac0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_assets",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "total_supply",
      "output": "d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "sub_id",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "burn",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "sub_id",
          "concreteTypeId": "0c2beb9013490c4f753f2757dfe2d8340b22ce3827d596d81d249b7038033cb6"
        },
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "mint",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "key",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "metadata",
      "output": "fe93748eeb5d91a422fcea06e1b374216ad4ac0b2db01be0a6316af7f90dfa4f",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "owner",
      "output": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "_asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "_decimals",
          "concreteTypeId": "c89951a24c6ca28c13fd1cfdc646b2b656d69e61a92b91023be7eb58eb914b6b"
        }
      ],
      "name": "set_decimals",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "set_name",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "symbol",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "set_symbol",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "key",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        },
        {
          "name": "metadata",
          "concreteTypeId": "f44b531974c6c04e17e66ab54e9868d230b9a24b3710b184399c363f0190180d"
        }
      ],
      "name": "set_metadata",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "is_paused",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "pause",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "unpause",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "constructor",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "10032608944051208538",
      "concreteTypeId": "8b3afcadf894415a10b09fc3717487e33802c8ffbb030edafe84ca4a71b280bc"
    },
    {
      "logId": "4237256875605624201",
      "concreteTypeId": "3acdc2adac8e0589c5864525e0edc9dc61a9571a4d09c3c57b58ea76d33f4b46"
    },
    {
      "logId": "17462098202904023478",
      "concreteTypeId": "f255d5cc2114d1b6bc34bef4c28d4b60caccffd9a672ed16b79ea217e1c4a8a3"
    },
    {
      "logId": "17188485204969729195",
      "concreteTypeId": "ee89c439b5472cab716006d7c677d16e15301e6c82cfce12cebfa57919f537de"
    },
    {
      "logId": "16139176946940135860",
      "concreteTypeId": "dff9dfec998a49b40f1c4b09567400f0e712aaf939c08f7d07bc5c63116e1084"
    },
    {
      "logId": "13791596350235125220",
      "concreteTypeId": "bf6597cf3d56a5e47a920520e275ccd481a27e7c988ea6af6f253170d5374c5a"
    },
    {
      "logId": "4571204900286667806",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d"
    },
    {
      "logId": "14321618427101975361",
      "concreteTypeId": "c6c09c148c1a1341c7ab81697b3545cc695fa67668a169cddc59790a9a0b6b44"
    },
    {
      "logId": "7845998088195677205",
      "concreteTypeId": "6ce295b0fb4c1c15e8ed1cfa4babda47d8a04940a5266a3229e12243a2e37c2c"
    },
    {
      "logId": "12152039456660331088",
      "concreteTypeId": "a8a4b78066c51a50da6349bd395fe1c67e774d75c1db2c5c22288a432d7a363d"
    },
    {
      "logId": "17415926155927968170",
      "concreteTypeId": "f1b1cc90b68559aa4bb5cc58201ebb5c5402ed3aa28927140761e8ff7dcd3ab8"
    },
    {
      "logId": "2161305517876418151",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893"
    },
    {
      "logId": "16280289466020123285",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "MAX_SUPPLY",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 46776
    }
  ]
};

const storageSlots: StorageSlot[] = [
  {
    "key": "ad0db2b0fc00bf54d2d0159d8639f4a8f48be8403564992aaaac00d69daa3137",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class NftInsuranceContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    decimals: FunctionFragment;
    name: FunctionFragment;
    symbol: FunctionFragment;
    total_assets: FunctionFragment;
    total_supply: FunctionFragment;
    burn: FunctionFragment;
    mint: FunctionFragment;
    metadata: FunctionFragment;
    owner: FunctionFragment;
    set_decimals: FunctionFragment;
    set_name: FunctionFragment;
    set_symbol: FunctionFragment;
    set_metadata: FunctionFragment;
    is_paused: FunctionFragment;
    pause: FunctionFragment;
    unpause: FunctionFragment;
    constructor: FunctionFragment;
  };
}

export class NftInsuranceContract extends __Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: NftInsuranceContractInterface;
  declare functions: {
    decimals: InvokeFunction<[_asset: AssetIdInput], Option<number>>;
    name: InvokeFunction<[asset: AssetIdInput], Option<StdString>>;
    symbol: InvokeFunction<[asset: AssetIdInput], Option<StdString>>;
    total_assets: InvokeFunction<[], BN>;
    total_supply: InvokeFunction<[asset: AssetIdInput], Option<BN>>;
    burn: InvokeFunction<[sub_id: string, amount: BigNumberish], void>;
    mint: InvokeFunction<[recipient: IdentityInput, sub_id: Option<string>, amount: BigNumberish], void>;
    metadata: InvokeFunction<[asset: AssetIdInput, key: StdString], Option<MetadataOutput>>;
    owner: InvokeFunction<[], StateOutput>;
    set_decimals: InvokeFunction<[_asset: AssetIdInput, _decimals: BigNumberish], void>;
    set_name: InvokeFunction<[asset: AssetIdInput, name: StdString], void>;
    set_symbol: InvokeFunction<[asset: AssetIdInput, symbol: StdString], void>;
    set_metadata: InvokeFunction<[asset: AssetIdInput, key: StdString, metadata: MetadataInput], void>;
    is_paused: InvokeFunction<[], boolean>;
    pause: InvokeFunction<[], void>;
    unpause: InvokeFunction<[], void>;
    constructor: InvokeFunction<[owner: IdentityInput], void>;
  };

  constructor(
    id: string | Address,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
