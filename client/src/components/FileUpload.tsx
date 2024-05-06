import * as LR from "@uploadcare/blocks";
import blocksStyles from "@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url";

LR.registerBlocks(LR);

export default function FileUpload() {
  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="db7be704b01da6fe827c" />
      <lr-file-uploader-regular  ctx-name="my-uploader" css-src={blocksStyles} />
    </div>
  );
}
