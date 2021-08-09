// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DrawingCollectible is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("True love - Forever", "LCL") {
        tokenCounter = 0;
    }

    function createCollectible(string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }
}
